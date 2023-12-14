"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const router = useRouter();

  function onSearchChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setLocation(event?.target.value);
  }

  function onSearch() {
    router.push(`/search?city=${location}`);
    setLocation("");
  }

  return (
    <div
      className="
      text-left px-2 md:px-0 m-0 flex
      items-center justify-center md:justify-start w-full"
    >
      <input
        className="
        rounded-md input-bordered input-primary
        w-full max-w-xs  mr-3 p-3"
        type="text"
        placeholder="State, city or town"
        onChange={onSearchChangeHandler}
        value={location}
      />
      <button
        className="btn bg-blue-500 rounded-md px-12 text-white r"
        onClick={onSearch}
      >
        Let's go
      </button>
    </div>
  );
}
