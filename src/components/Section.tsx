export default function Section({ children, styling }) {
  return (
    <section className={`${styling} px-36 h-svh flex flex-col justify-center snap-start md:px-24 sm:px-16`}>
      {children}
    </section>
  );
}
