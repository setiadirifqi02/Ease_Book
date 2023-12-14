import { Metadata } from "next";
import { PrismaClient, PRICE, Cuisine, Location } from "@prisma/client";

import Heading from "../components/heading";
import SearchBar from "../components/search-bar";

import DrawerSearchFilter from "./components/drawer-search";
import DetailedCard from "./components/detail-card";

const prisma = new PrismaClient();

interface searchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const fetchRestaurantByCity = (searchParams: searchParams) => {
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLocaleLowerCase(),
      },
    };
    where.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLocaleLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true,
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLoation = () => {
  return prisma.location.findMany({});
};

const fetchCuisine = () => {
  return prisma.cuisine.findMany();
};

export const metadata: Metadata = {
  title: "Search | Ease Book",
  description: "Find your favourite restaurant here",
};

export default async function Search({
  searchParams,
}: {
  searchParams: searchParams;
}) {
  const restaurantByCity = await fetchRestaurantByCity(searchParams);
  const locations = await fetchLoation();
  const cuisines = await fetchCuisine();

  return (
    <div className="search-page___container h-full ">
      <div
        className="
        search-page___heading h-52 w-full flex flex-col 
        justify-center items-center md:items-start 
        bg-gradient-to-br from-slate-300 to-slate-50  pt-28 px-3 md:px-5"
      >
        <Heading
          alignSm="text-center"
          fontSize="text-2xl"
          headingTitle="What can we help you find?"
        />
        <div
          className="
        serach-bar__container flex flex-col md:flex-row gap-1 md:gap-3
        w-full items-start mb-5"
        >
          <SearchBar />
          <DrawerSearchFilter
            locations={locations}
            cuisines={cuisines}
            searchParams={searchParams}
          />
        </div>
      </div>

      <div className="result___container   grid grid-cols-1 gap-2 md:gap-5 md:grid-cols-2 xl:grid-cols-3 mt-5 px-3 md:px-5">
        {restaurantByCity.length ? (
          <>
            {restaurantByCity.map((restaurant) => (
              <DetailedCard key={restaurant.id} restaurants={restaurant} />
            ))}
          </>
        ) : (
          <>
            <p>We can find the Restaurant You are looking for</p>
          </>
        )}
      </div>
    </div>
  );
}
