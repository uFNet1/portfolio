export default function Link({ children, linkTo }) {
  return (
    <a className="text-lg md:text-4xl font-light text-blue-400 hover:font-medium" href={linkTo}>
      {children}
    </a>
  );
}
