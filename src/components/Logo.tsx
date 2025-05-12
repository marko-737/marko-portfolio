const Logo = () => {
  return (
    <a
      href="#home"
      className="flex items-center text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent"
    >
      <span className="text-4xl font-light mr-2">&#60;&#47;&#62;</span>{" "}
      <div className="flex flex-col leading-tight">
        <span className="font-semibold text-xl">Marko Kostic</span>
        <span className="text-xs font-normal tracking-wider">
          Frontend Developer
        </span>
      </div>
    </a>
  );
};

export default Logo;
