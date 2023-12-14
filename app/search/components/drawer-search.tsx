"use client";
import Button from "@/app/components/custom-btn";
import Heading from "@/app/components/heading";
import { FeaturesIcon } from "@/app/components/icon";
import { Location, Cuisine, PRICE } from "@prisma/client";
import Link from "next/link";

export default function DrawerSearchFilter({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) {
  const prices = [
    { price: PRICE.CHEAP, label: "$" },
    { price: PRICE.REGULAR, label: "$$" },
    { price: PRICE.EXPENSIVE, label: "$$$" },
  ];
  return (
    <div className="drawer drawer-end w-20 z-50">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-Button btn bg-transparent text-blue-600"
        >
          <FeaturesIcon />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 pt-20 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="w-1/5">
            <div className="border-b pb-4">
              <Heading
                alignSm="text-left"
                fontSize="text-xl"
                headingTitle="Region"
              />
              {locations.map((location) => (
                <Link
                  href={{
                    pathname: "/search",
                    query: {
                      ...searchParams,
                      city: `${location.name}`,
                    },
                  }}
                  className="font-md capitalize font-gray-600 inline-flex flex-col"
                  key={location.id}
                >
                  {location.name}
                </Link>
              ))}
            </div>
            <div className="border-b pb-4 mt-3">
              <Heading
                alignSm="text-left"
                fontSize="text-xl"
                headingTitle="Cuisine"
              />
              {cuisines.map((cuisine) => (
                <Link
                  href={{
                    pathname: "/search",
                    query: {
                      ...searchParams,
                      cuisine: `${cuisine.name}`,
                    },
                  }}
                  className="font-md capitalize font-gray-600 inline-flex flex-col"
                  key={cuisine.id}
                >
                  {cuisine.name}
                </Link>
              ))}
            </div>
            <div className="mt-3 pb-4">
              <Heading
                alignSm="text-left"
                fontSize="text-xl"
                headingTitle="Price"
              />
              <div className="flex gap-2 items-center">
                {prices.map(({ price, label }) => (
                  <Link
                    href={{
                      pathname: "/search",
                      query: {
                        ...searchParams,
                        price: price,
                      },
                    }}
                    className="btn bg-blue-600 text-white"
                    key={price}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
