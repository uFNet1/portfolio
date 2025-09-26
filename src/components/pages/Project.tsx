import Section from "../Section";
export default function Project() {
  const sectionStyles = "bg-linear-to-b from-black to-neutral-700 from-0% to-100%";
  return (
    <Section styling={sectionStyles}>
      <h1>The Gazeta Vest Project</h1>
      <h2>From a little button to a big app</h2>
    </Section>
  );
}
