import Link from "next/link";
import { RestaurantCardType } from "../../page";

import Heading from "../../components/heading";
import Price from "../../components/price";
import { StarIcon } from "../../components/icon";

import { calculateReviewRatingAverage } from "@/utlis/calculateReviewRatingAverage";
import Stars from "@/app/components/star";

type AppProps = {
  restaurants: RestaurantCardType;
};

export default function DetailedCard({ restaurants }: AppProps) {
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurants.reviews);

    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 0) return "Average";
    else "";
  };
  return (
    <div
      className="
        my-2 flex w-full h-[160px] md:h-[200px]
      hover:bg-slate-200 
       rounded-xl shadow-lg"
    >
      <div className="card-product___image flex w-5/12 md:w-4/12 p-2 md:p-5">
        <img
          src={`${restaurants.main_image}`}
          alt={`${restaurants.name}`}
          className=" rounded-[12px]"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="card-product__main ml-2 p-2 md:p-4 flex w-7/12 flex-col ">
        <div
          className="
            card-product__info ml-3 flex w-full
            flex-col justify-between md:ml-5 text-start"
        >
          <div>
            <Heading
              alignSm="text-left"
              fontSize="text-md"
              headingTitle={`${restaurants.name}`}
            />
            <div className="flex items-start gap-2">
              <div className="flex text-blue-600">
                <Stars reviews={restaurants.reviews} />
              </div>
              <p className="text-sm">{renderRatingText()}</p>
            </div>
          </div>
          <div className="mt-0 md:mt-2 mb-1 md:mb-4">
            <div className="font-light flex flex-col mb-2 md:flex-row gap-1 md:gap-2 items-start md:items-center text-md">
              <Price price={restaurants.price} />
              <div className="flex ">
                <p className="mr-4 text-sm">{restaurants.cuisine.name}</p>
                <p className="mr-4 text-sm">{restaurants.location.name}</p>
              </div>
            </div>
          </div>
          <div className="text-blue-600 text-sm md:text-md">
            <Link href={`/restaurant/${restaurants.slug}`}>
              View more information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
