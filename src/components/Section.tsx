export default function Section({ children, styling }) {
  return <section className={`${styling} px-36 h-svh flex flex-col justify-center snap-start`}>{children}</section>;
}
