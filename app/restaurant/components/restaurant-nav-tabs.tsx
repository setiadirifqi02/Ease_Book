"use client";
import Link from "next/link";

type AppProps = {
  isOverViewActive: string;
  isMenuActive: string;
  slug?: string;
};

export default function RestaurantNavTabs({
  isOverViewActive,
  isMenuActive,
  slug,
}: AppProps) {
  return (
    <div
      role="tablist"
      className="restaurant___tabs-nav tabs tabs-bordered my-5 w-52"
    >
      <Link
        role="tab"
        href={`/restaurant/${slug}`}
        className={`tab ${isOverViewActive}`}
      >
        Overview
      </Link>
      <Link
        role="tab"
        href={`/restaurant/${slug}/menu`}
        className={`tab ${isMenuActive}`}
      >
        Menu
      </Link>
    </div>
  );
}
