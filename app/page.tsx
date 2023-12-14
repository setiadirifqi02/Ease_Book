import RestaurantCard from "./components/restaurant-card";
import SearchBar from "./components/search-bar";
import Button from "./components/custom-btn";
import AuthModal from "./components/auth-modal";
import Heading from "./components/heading";
import Content from "./components/content";
import { PrismaClient, Cuisine, Location, PRICE, Review } from "@prisma/client";

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
  reviews: Review[];
}

const prisma = new PrismaClient();

const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
      reviews: true,
    },
  });

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <main
        className="flex flex-col md:flex-row h-full w-full bg-gradient-to-br from-slate-300
      to-slate-50 "
      >
        {/* Hero Section */}
        <div
          className="hero static md:fixed min-h-screen w-full md:w-6/12"
          style={{
            backgroundImage: "url(/images/bg-image.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content  text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex gap-2 items-center justify-center">
                <AuthModal isSignIn={true} />
                <AuthModal isSignIn={false} />
              </div>
            </div>
          </div>
        </div>

        {/* Result Secton */}

        <div
          className=" z-40
          main__content flex flex-col h-full w-full md:w-6/12 my-2 translate-x-0 md:translate-x-full
          md:my-16 p-3 md:p-8 text-center items-center md:items-start justify-start"
        >
          <div className="Heading">
            <Heading
              headingTitle="Booking Restaurant Easily"
              fontSize="text-2xl"
              alignSm="text-center"
            />
            <Content
              capitalize=" "
              textAlignSm="text-center"
              content="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi."
            />
          </div>
          <div className="divider"></div>
          <SearchBar />
          <div className="main__content_restaurant w-full ">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurants={restaurant} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
