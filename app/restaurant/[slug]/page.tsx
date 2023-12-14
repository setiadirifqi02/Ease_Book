import { Metadata } from "next";
import Heading from "@/app/components/heading";
import Content from "@/app/components/content";

import RestaurantReview from "../components/restaurant-review";
import Gallery from "../components/gallery";
import ReservationCta from "../components/reservation-cta";
import RestaurantNavTabs from "../components/restaurant-nav-tabs";
import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";
import Rating from "../components/rating";

export const metadata: Metadata = {
  title: "Milestones Grill | Ease Book",
  description: "Milestones Grill restaurant",
};

export interface Restaurant {
  id: String;
  name: String;
  description: String;
  images: String[];
  location: true;
  reviews: Review[];
  slug: String;
  open_time: String;
  close_time: String;
}

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      location: true,
      reviews: true,
      slug: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

const fetchReviews = async (id?: number) => {
  const reviews = await prisma.review.findMany({
    where: { restaurant_id: id },
  });

  return reviews;
};

export default async function OverviewRestaurant({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  const reviews = await fetchReviews(restaurant?.id);

  // console.log(restaurant);
  // console.log(loaction);
  // console.log(reviews);
  return (
    <div
      className="
      detail-restaurant___main flex flex-col
      md:flex-row h-full w-full items-cente
      bg-slate-100"
    >
      {/* Detail Restaurant */}
      <div
        className="restaurant___desc-container flex flex-col w-full
        md:w-7/12  bg-gradient-to-br from-slate-300
      to-slate-50 h-full pt-20 pb-10 px-3 md:px-5"
      >
        <RestaurantNavTabs
          isMenuActive="null"
          isOverViewActive="tab-active text-blue-600  font-semibold"
          slug={restaurant?.slug}
        />
        <div className="restaurant___desct-content">
          <Heading
            headingTitle={`${restaurant?.name}`}
            fontSize="text-2xl"
            alignSm="text-left"
          />
          <Rating reviews={restaurant.reviews} />
          <Content
            textAlignSm="text-left"
            capitalize="text-gray-600"
            content={`${restaurant?.description}`}
          />
        </div>
        <div className="restaurant___location-container">
          <div className="divider"></div>
          <Heading
            headingTitle="Location"
            fontSize="text-xl"
            alignSm="text-left"
          />
          <Content
            textAlignSm="text-left"
            capitalize="capitalize text-gray-600"
            content={`${restaurant?.location.name}`}
          />
        </div>
        <div className="restaurant___review-conteiner">
          <div className="divider"></div>
          <Heading
            alignSm="text-left"
            fontSize="text-xl"
            headingTitle="What people are saying"
          />
          <div className="flex flex-col items-start">
            {reviews.map((review) => (
              <RestaurantReview reviews={review} key={review.id} />
            ))}
          </div>
          <div className="flex h-[200px] w-full"></div>
        </div>
      </div>

      {/* CTA Restaurant */}
      <div className="restaurant___cta-container w-full h-full pt-5 md:pt-32 pb-10 px-3 md:px-5">
        <Gallery images={restaurant?.images} />
        <ReservationCta
          openTime={restaurant.open_time}
          closeTime={restaurant.close_time}
        />
      </div>
    </div>
  );
}
