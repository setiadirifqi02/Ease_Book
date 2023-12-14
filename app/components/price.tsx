import { PRICE } from "@prisma/client";
import { PriceTag } from "./icon";

type AppProps = {
  price: PRICE;
};

export default function Price({ price }: AppProps) {
  function priceTag() {
    if (price === PRICE.CHEAP) {
      return (
        <div className="price mt-2 text-sm text-blue-600">
          <PriceTag />
        </div>
      );
    } else if (price === PRICE.REGULAR) {
      return (
        <div className="price mt-2 text-sm flex gap-1 text-blue-600">
          <PriceTag /> <PriceTag />
        </div>
      );
    } else {
      return (
        <div className="price mt-2 text-sm flex gap-1 text-blue-600">
          {" "}
          <PriceTag /> <PriceTag /> <PriceTag />{" "}
        </div>
      );
    }
  }

  return <div className="price__tag">{priceTag()}</div>;
}
