export default function Section({ children, styling }) {
  return (
    <section className={`${styling} px-12 h-svh flex flex-col justify-center snap-start lg:px-36 md:px-24`}>
      {children}
    </section>
  );
}
