import Link from "./Link";
import Section from "./Section";
import cursor from "/cursor.png";

export default function Contacts() {
  const sectionStyles = "bg-linear-to-b to-black from-neutral-700 from-0% to-100%";
  return (
    <Section styling={sectionStyles}>
      <h1 className="text-8xl font-light mx-auto mb-16">Contact</h1>
      <div className="flex flex-col gap-2 items-start relative" id="contacts">
        <h2 className="text-4xl">Let's get in touch!</h2>
        <h3 className="text-4xl font-light">You can reach me through these platforms:</h3>
        <br />
        <div className="flex flex-row items-center relative">
          <div className="flex flex-col items-start">
            <Link linkTo={""}>Telegram</Link>
            <Link linkTo={""}>Instagram</Link>
            <Link linkTo={""}>Facebook</Link>
            <Link linkTo={""}>LinkedIn</Link>
            <Link linkTo={""}>WhatsApp</Link>
            <Link linkTo={"mailto:vlasenko.mykhailo.mv@email.com"}>E-mail</Link>
          </div>
        </div>
        <img width="200px" height="200px" src={cursor} alt="Photo of myself" className="absolute left-64" />
      </div>
    </Section>
  );
}
