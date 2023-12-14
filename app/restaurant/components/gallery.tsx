import Heading from "@/app/components/heading";

export default function Gallery({ images }: { images?: string[] }) {
  return (
    <>
      <h1 className="font-sm font-semibold mb-4 align-left md:text-left text-blue-600">
        {images?.length} Photo{images && images.length > 1 ? "s" : ""}
      </h1>
      <div className="Gallery flex flex-wrap mt-5 gap-2">
        {images?.map((image, index) => (
          <img
            className="w-56 h-44 mr-1 mb-1 rounded-2xl"
            src={`${image}`}
            alt=""
            key={index}
          />
        ))}
      </div>
    </>
  );
}
