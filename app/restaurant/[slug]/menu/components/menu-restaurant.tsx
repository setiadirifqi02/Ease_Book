import Heading from "@/app/components/heading";
import Content from "@/app/components/content";

import { PriceTag } from "@/app/components/icon";

type AppProps = {
  name: string;
  description: string;
  price: string;
};

export default function MenuRestaurantList({
  name,
  description,
  price,
}: AppProps) {
  return (
    <div className="mt-5 bg-slate-50 drop-shadow-md p-5  rounded-lg">
      <Heading alignSm="text-left" fontSize="text-xl" headingTitle={name} />
      <Content
        capitalize=""
        textAlignSm="text-left text-gray-600"
        content={description}
      />
      <div className="flex w-[120px] h-[40px] mt-5 text-blue-600">
        <PriceTag />
        <p className="ml-2 font-semibold text-gray-500">{price}</p>
      </div>
    </div>
  );
}
