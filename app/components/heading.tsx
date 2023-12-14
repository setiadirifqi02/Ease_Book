type AppProps = {
  headingTitle: string;
  fontSize: string;
  alignSm: string;
};
export default function Heading({ headingTitle, fontSize, alignSm }: AppProps) {
  return (
    <h1
      className={`${fontSize} font-semibold mb-1 md:mb-4 ${alignSm} md:text-left text-blue-600`}
    >
      {headingTitle}
    </h1>
  );
}
