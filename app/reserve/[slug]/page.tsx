import { Metadata } from "next";
import Heading from "@/app/components/heading";
import Content from "@/app/components/content";
import ReserveDetail from "../components/reserve-detail";
import ReservationCta from "@/app/restaurant/components/reservation-cta";

export const metadata: Metadata = {
  title: "Reserve for Milestones Grill | Ease Book",
  description: "Reserve for Milestones Grill restaurant",
};

export default function Reservation() {
  return (
    <div
      className="
      reservation___main flex flex-col
      md:flex-row h-full w-full items-cente"
      style={{
        backgroundImage: "url(/images/bg-image.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div
        className="
        reservation___desc flex flex-col  w-full md:w-5/12 
        bg-gradient-to-br from-slate-300
      to-slate-50 h-full pt-32 pb-10 px-3 md:px-5"
      >
        <Heading
          alignSm="text-left"
          fontSize="text-2xl"
          headingTitle="You're almost done!"
        />
        <Content
          content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          blanditiis asperiores cum placeat enim accusamus atque eius hic et,
          quod dolores iste dolorem, ipsum in aliquid aliquam error magnam esse.
          Adipisci quo est veritatis necessitatibus, neque eius pariatur soluta
          eos incidunt praesentium obcaecati nesciunt."
          textAlignSm="text-left"
        />
        <div className="divider"></div>
        <Heading
          alignSm="text-left"
          fontSize="text-xl"
          headingTitle="Resrvation Detail"
        />
        <div className="w-full">
          {/* HEADER */}
          <div>
            <ReserveDetail />
          </div>
          <ReservationCta />
        </div>
        <div className="flex h-[200px] w-full"></div>
      </div>
    </div>
  );
}
