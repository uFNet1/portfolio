export default function Button({ children, styling, to }) {
  return (
    <button
      type="button"
      className={`cursor-pointer border rounded-full px-5 py-2 text-base md:text-2xl transition-all duration-200 ${styling} `}
    >
      <a href={to}>{children}</a>
    </button>
  );
}
