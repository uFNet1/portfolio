import Button from "../Button";
import GlowText from "../GlowText";
import Section from "../Section";

export default function Home() {
  return (
    <Section styling={"bg-radial from-neutral-700 from-0% to-black to-100%"}>
      <div className="justify-self-center relative" id="home">
        <h1 className="text-2xl md:text-8xl font-light">
          Hello, i'm <strong className="font-medium">Michael</strong>
        </h1>
        <h2 className="text-lg md:text-5xl font-light">
          Web Developer • <GlowText color={"text-shadow-cyan-400"}>React</GlowText> &{" "}
          <GlowText color={"text-shadow-blue-500"}>WordPress</GlowText>
        </h2>
        <div className="flex flex-row gap-5 mt-5">
          <Button
            styling={
              "bg-linear-to-tl from-blue-700 via-gray-500 to-gray-800 border-0 bg-[length:200%_200%] bg-[position:0%_0%] hover:bg-[position:100%_100%] duration-300"
            }
            to={"#projects"}
          >
            View my work
          </Button>
          <Button styling={"hover:bg-stone-700"} to={"#contacts"}>
            Let's build together
          </Button>
        </div>
      </div>
    </Section>
  );
}
