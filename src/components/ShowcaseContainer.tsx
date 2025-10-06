import { Link } from "@tanstack/react-router";

export default function ShowcaseContainer({
  header,
  subheader,
  imgSrc,
}: {
  header: string;
  subheader: string;
  imgSrc: string;
}) {
  return (
    <div className="flex-none w-10/12 snap-center px-4 py-2">
      <Link
        to="/projects/vest"
        className="justify-items-center flex flex-col gap-4 cursor-pointer"
        viewTransition={true}
        reloadDocument={false}
        hashScrollIntoView={false}
        resetScroll={true}
      >
        <h1 className="text-3xl text-center">{header}</h1>
        <h2 className="text-lg text-neutral-400">{subheader}</h2>
        <img
          className="w-full rounded border border-white lg:w-1/2 transition duration-300 hover:scale-105 hover:cursor-pointer"
          src={imgSrc}
          alt=""
        />
      </Link>
    </div>
  );
}
