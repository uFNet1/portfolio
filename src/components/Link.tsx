export default function Link({ children, linkTo }) {
  return (
    <a className="text-4xl font-light hover:font-medium" href={linkTo}>
      {children}
    </a>
  );
}
