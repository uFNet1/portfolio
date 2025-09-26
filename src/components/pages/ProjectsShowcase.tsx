import Section from "../Section";
import vestBanner from "/vest/banner.webp";
export default function Project() {
  const sectionStyles = "bg-linear-to-b from-black via-neutral-700 to-black from-0% via-50% to-100%";
  return (
    <Section styling={sectionStyles}>
      <div id="scrollableProjects" className="flex flex-row overflow-x-auto snap-mandatory snap-x pb-5">
        <div className="flex flex-none flex-col gap-4 justify-center align-middle items-center w-full snap-center">
          <h1 className="text-3xl">The Gazeta Vest Project</h1>
          <h2 className="text-lg text-neutral-400">From a little button to a big app</h2>
          <img className="w-3/4 rounded border border-white" src={vestBanner} alt="" />
        </div>

        <div className="flex flex-none flex-col gap-4 justify-center align-middle items-center w-full snap-center">
          <h1 className="text-3xl">The Gazeta Vest Project</h1>
          <h2 className="text-lg text-neutral-400">Test 12312312</h2>
          <img className="w-3/4 rounded border border-white" src={vestBanner} alt="" />
        </div>

        <div className="flex flex-none flex-col gap-4 justify-center align-middle items-center w-full snap-center">
          <h1 className="text-3xl">The Gazeta Vest Project</h1>
          <h2 className="text-lg text-neutral-400">ASJKDHKSAJHDJK</h2>
          <img className="w-3/4 rounded border border-white" src={vestBanner} alt="" />
        </div>
      </div>
    </Section>
  );
}
