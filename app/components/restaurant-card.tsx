"use client";
import Image from "next/image";
import Link from "next/link";
import { RestaurantCardType } from "../page";
import Price from "./price";

type AppProps = {
  restaurants: RestaurantCardType;
};

export default function RestaurantCard({ restaurants }: AppProps) {
  return (
    <Link href={`/restaurant/${restaurants.slug}`}>
      <div
        className="
        my-6  flex w-full
      hover:bg-slate-100 h-[120px]
      bg-slate-50 rounded-xl drop-shadow-md "
      >
        <div className="card-product___image flex w-5/12 md:w-4/12 p-2 md:p-4">
          <img
            src={restaurants.main_image}
            alt={restaurants.name}
            className=" rounded-[12px]"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="card-product__main flex w-7/12 flex-col p-2 md:p-4">
          <div
            className="
            card-product__info ml-3 flex w-full
            flex-col justify-between md:ml-5 text-start"
          >
            <div>
              <h4 className="mb-2 text-sm font-semibold text-blue-600 md:text-base">
                {restaurants.name}
              </h4>
              <div className="flex flex-col md:flex-row items-start  md:items-center justify-between">
                <div>
                  <p className="text-xs  text-gray-600 md:text-sm capitalize">
                    {restaurants.cuisine.name}
                  </p>
                  <p className="text-xs  text-gray-600 md:text-sm capitalize">
                    {restaurants.location.name}
                  </p>
                </div>
                <Price price={restaurants.price} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
