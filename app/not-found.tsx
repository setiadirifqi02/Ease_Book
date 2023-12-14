"use client";

import Image from "next/image";
import Link from "next/link";
import notFound from "../public/images/not-found.png";

export default function Error({ error }: { error: Error }) {
  return (
    <div
      className="
    restaurant___desc-container flex flex-col w-full
    bg-gradient-to-br from-slate-300
  to-slate-50 h-screen pt-20 pb-10 px-3 md:px-5 items-center justify-center"
    >
      <Image src={notFound} alt="not Found img" height={400} />
      <h2>Apologize, Seems we cannot find The Page Your Looking For..</h2>
      <Link
        href="/"
        className="btn px-10 py-4 rounded-full mt-4 bg-blue-600 text-white"
      >
        Go Home
      </Link>
    </div>
  );
}
