"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DatePicker from "react-datepicker";

import { BookIcon } from "@/app/components/icon";
import Heading from "@/app/components/heading";
import { partySize, times } from "../../../data";

export default function ReservationCta({
  openTime,
  closeTime,
}: {
  openTime: string;
  closeTime: string;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const router = useRouter();

  const onDateChangeHandler = (date: Date | null) => {
    if (date) {
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const onFilterOperationRestauran = () => {
    let timesInWindow: typeof times = [];
    let isWithInWindow = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isWithInWindow = true;
      }
      if (isWithInWindow) {
        timesInWindow.push(time);
      }

      if (time.time === closeTime) {
        isWithInWindow = false;
      }
    });

    return timesInWindow;
  };
  return (
    <div className="Cta__reservation-container w-90 md:w-8/12 text-reg mt-10">
      <Heading
        alignSm="text-left"
        fontSize="text-xl"
        headingTitle="Make Reservation"
      />
      <div className="">
        <div className="text-center border-b pb-2 font-bold"></div>
        <div className="my-3 flex flex-col">
          <label htmlFor="">Party size</label>
          <select
            name=""
            className="py-3 border-b font-light px-2 md:px-4"
            id=""
          >
            {partySize.map((size) => (
              <option value={size.value} key={size.label}>
                {size.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-[49%]">
            <label htmlFor="">Date</label>
            <DatePicker
              selected={selectedDate}
              className="py-3 border-b font-light w-40 px-2 md:px-4"
              onChange={onDateChangeHandler}
              dateFormat="MMMM d"
              wrapperClassName="w=[48%]"
            />
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="">Time</label>
            <select
              name=""
              id=""
              className="py-3 border-b font-light px-2 md:px-4"
            >
              {onFilterOperationRestauran().map((time) => (
                <option value={time.time} key={time.time}>
                  {time.displayTime}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5">
          <button
            className="
                bg-blue-600 rounded w-full px-4 
                text-white font-bold h-16 flex gap-2 items-center justify-center"
            onClick={() => {
              router.push("/reserve/:slug");
            }}
          >
            <BookIcon /> Find a Time
          </button>
        </div>
      </div>
    </div>
  );
}
