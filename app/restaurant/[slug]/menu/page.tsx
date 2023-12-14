import { Metadata } from "next";
import Heading from "@/app/components/heading";

import RestaurantNavTabs from "../../components/restaurant-nav-tabs";
import MenuRestaurantList from "./components/menu-restaurant";

import { PrismaClient } from "@prisma/client";

export const metadata: Metadata = {
  title: "Menu of Milestones Grill | Ease Open",
  description: "List Menu of Milestones Grill Restaurant",
};

const prisma = new PrismaClient();

const fetchMenu = async (slug: string) => {
  const restaurantMenu = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      items: true,
    },
  });

  if (!restaurantMenu) {
    throw new Error();
  }
  return restaurantMenu.items;
};

export default async function MenuRestaurant({
  params,
}: {
  params: { slug: string };
}) {
  const restaurantMenu = await fetchMenu(params.slug);

  return (
    <div
      className="
      menu___container flex flex-col
      md:flex-row h-full w-full items-cente
      bg-slate-100"
    >
      {/* Menu Restaurant */}
      <div
        className="
        menu___content flex flex-col w-full
        bg-gradient-to-br from-slate-300
      to-slate-50 h-full pt-20 pb-10 px-3 md:px-5"
      >
        <RestaurantNavTabs
          slug={params.slug}
          isMenuActive="tab-active text-blue-600 font-semibold"
          isOverViewActive=""
        />
        <Heading
          alignSm="text-left"
          fontSize="text-2xl"
          headingTitle="List of Menu"
        />
        <div className="grid grid-cols-1 gap-2 md:gap-5 md:grid-cols-2 xl:grid-cols-3 mt-5 px-3 md:px-5">
          {restaurantMenu.length ? (
            <>
              {restaurantMenu.map((items) => (
                <MenuRestaurantList
                  key={items.id}
                  name={items.name}
                  description={items.description}
                  price={items.price}
                />
              ))}
            </>
          ) : (
            <>
              <p>This restaurant doesn't have menu yet</p>
            </>
          )}
        </div>

        <div className="divider"></div>
        <div className="flex h-[200px] w-full"></div>
      </div>
    </div>
  );
}
