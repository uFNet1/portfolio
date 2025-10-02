import { Link } from "@tanstack/react-router";

export default function ShowcaseContainer({ header, subheader, imgSrc }) {
  return (
    <div className="flex flex-none flex-col gap-4 justify-center align-middle items-center w-full snap-center">
      <h1 className="text-3xl">{header}</h1>
      <h2 className="text-lg text-neutral-400">{subheader}</h2>
      <Link
        to="/projects/vest"
        className="justify-items-center"
        viewTransition={true}
        reloadDocument={false}
        hashScrollIntoView={false}
        resetScroll={true}
      >
        <img
          className="w-3/4 rounded border border-white lg:w-1/2 transition duration-300 hover:scale-105 hover:cursor-pointer"
          src={imgSrc}
          alt=""
        />
      </Link>
    </div>
  );
}
