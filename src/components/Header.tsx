export default function Header() {
  return (
    <header className="w-fit flex flex-row justify-center gap-4 text-2xl font-extralight right-36 top-10 sticky h-0 float-right">
      <a href="#about">Home</a>
      <a href="#about">About me</a>
      {/* <span className="text-gray-700 select-none">|</span> */}
      <a href="#work">Projects</a>
      {/* <span className="text-gray-700 select-none">|</span> */}
      <a href="#contacts">Contacts</a>
    </header>
  );
}
