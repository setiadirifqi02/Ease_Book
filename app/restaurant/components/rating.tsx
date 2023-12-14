import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "@/utlis/calculateReviewRatingAverage";
import Stars from "@/app/components/star";
//

export default function Rating({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex items-end text-sm text-gray-600">
      <div className="rating  flex items-center">
        <Stars reviews={reviews} />
        <p className="text-reg ml-3">
          | {calculateReviewRatingAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="ml-3">
          | {reviews.length} Review{reviews.length === 1 ? "" : "s"}
        </p>
      </div>
    </div>
  );
}
