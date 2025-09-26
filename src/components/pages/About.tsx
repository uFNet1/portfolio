import Section from "../Section";
import portrait from "/portrait.webp";
export default function About() {
  const sectionStyles = "bg-linear-to-b from-black to-neutral-700 from-0% to-100%";
  return (
    <Section styling={sectionStyles}>
      <h1 className="text-8xl font-light mx-auto mb-16">About me</h1>
      <div className="flex flex-row gap-16">
        <div className="w-1/3 my-auto" id="about">
          <img
            width="309px"
            height="483px"
            src={portrait}
            alt="Photo of myself"
            className="outline outline-neutral-600 shadow-[33px_33px_0px_-2px] shadow-[#00000025]"
          />
        </div>
        <div className="w-px h-full bg-neutral-400"></div>
        <p className="w-2/3 font-light text-2xl">
          I started my <strong>web development journey in 2023</strong>, when I was building simple HTML pages for my{" "}
          <abbr title="Computer Science">CS</abbr> classes. During my first JavaScript class, I was amazed by how
          intuitive and powerful the language felt.
          <br />
          <br />
          Since then, I’ve been constantly improving my skills, building websites for myself and for clients.{" "}
          <strong>JavaScript and React</strong> allow me to create dynamic, interactive front-end experiences, while{" "}
          <strong>WordPress</strong> is a powerful tool for delivering fast and practical solutions.
          <br />
          <br />
          I’m open to building all kinds of projects — from <strong>single-page websites</strong> and{" "}
          <strong>e-commerce stores</strong> to <strong>custom web applications</strong>. Whatever you can imagine, I’d
          love to help bring it to life. <strong>Let’s connect and discuss your idea!</strong>
        </p>
      </div>
    </Section>
  );
}
