import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { times } from "../../../../data";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug, day, time, partySize } = req.query as {
    slug: string;
    time: string;
    day: string;
    partySize: string;
  };

  if (!time || !day || !partySize) {
    return res.status(400).json({
      message: "Invalid Property",
    });
  }

  const searchTime = times.find((t) => t.time === time)?.searchTimes;

  if (!searchTime) {
    return res.status(400).json({
      message: "Invalid Property",
    });
  }
  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTime[0]}`),
        lte: new Date(`${day}T${searchTime[searchTime.length - 1]}`),
      },
    },
    select: {
      number_of_people: true,
      booking_time: true,
      tables: true,
    },
  });

  const bookingTablesObj: { [key: string]: { [key: number]: true } } = {};

  bookings.forEach((booking) => {
    bookingTablesObj[booking.booking_time.toISOString()] =
      booking.tables.reduce((obj, table) => {
        return {
          ...obj,
          [table.table_id]: true,
        };
      }, {});
  });

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      tables: true,
    },
  });

  if (!restaurant) {
    return res.status(400).json({
      message: "Invalid Property",
    });
  }

  const tables = restaurant.tables;

  const searchTimeWithTable = searchTime.map((searchTm) => {
    return {
      date: new Date(`${day}T${searchTm}`),
      time: searchTm,
      tables,
    };
  });

  const availabilities = searchTimeWithTable.map((t) => {
    const sumSeat = t.tables.reduce((sum, table) => {
      return sum + table.seats;
    }, 0);

    return {
      time: t.time,
      available: sumSeat >= parseInt(partySize),
      sumSeat,
    };
  });

  return res.status(200).json({
    data: [
      {
        searchTimeWithTable,
        availabilities,
      },
    ],
  });
}

// slug,
// time,
// day,
// partySize,
// searchTime,
// bookings,
// bookingTablesObj,
// tables,
// searchTimeWithTable,

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-12-12&time=14:00:00.000Z&partySize=4
