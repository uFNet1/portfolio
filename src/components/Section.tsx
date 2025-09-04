export default function Section({ children }) {
  return (
    <section className="bg-radial from-stone-700 from-0% to-black to-100% h-svh px-36 flex flex-col justify-center snap-start">
      {children}
    </section>
  );
}
