export const Navbar = () => {
  return (
    <div className="flex flex-row items-end gap-20 text-[whitesmoke] pt-8">
      <a
        className="bg-gradient-to-r from-[#f65130]  to-[#e9941a]  text-transparent inline-block bg-clip-text text-2xl leading-20 tracking-wide"
        href="/"
      >
        balta.dev
      </a>
      <div className="hidden md:flex md:flex-row gap-10">
        <a href="/about">About</a>
        <a href="/tools">Tools & Languages</a>
        <a href="/gear">Gear</a>
      </div>
    </div>
  );
};
