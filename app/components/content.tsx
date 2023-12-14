type AppProps = {
  content: string;
  textAlignSm: string;
  capitalize: string;
};
export default function Content({
  textAlignSm,
  content,
  capitalize,
}: AppProps) {
  return (
    <p
      className={`content mt-2 text-md ${textAlignSm} md:text-left leading-7 text-gray-600 ${capitalize}`}
    >
      {content}
    </p>
  );
}
