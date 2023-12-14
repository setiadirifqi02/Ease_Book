import Heading from "@/app/components/heading";
import { Review } from "@prisma/client";

type AppProps = {
  reviews: Review;
};

function showFormattedDate(date: Date) {
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("en-US", options);
}

export default function RestaurantReview({ reviews }: AppProps) {
  return (
    <>
      <div className="reviews flex items-start  justify-center mt-2 py-2">
        <div className="avatar placeholder">
          <div className="bg-blue-600 text-white rounded-full w-12  md:w-16">
            <span className="text-md font-bold">
              {reviews.first_name[0]} {reviews.last_name[0]}
            </span>
          </div>
        </div>
        <div className="reviews__content px-4">
          <div className="flex gap-2 items-center mb-2 text-gray-600">
            <p className="text-md text-blue-600">
              {reviews.first_name} {reviews.last_name}
            </p>
            <p>|</p>
            <h4 className="text-sm text-gray-500">
              {showFormattedDate(reviews.created_at)}
            </h4>
          </div>
          <p className=" text-xs italic text-gray-500">{reviews.text}</p>
        </div>
      </div>
    </>
  );
}
