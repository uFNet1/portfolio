export default function GlowText({ children, color }) {
  return <span className={`text-shadow-[0px_0px_20px] ${color}`}>{children}</span>;
}
