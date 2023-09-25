const Navbar = ({ children }) => {
  return (
    <nav className=" bg-[#6741d9] whitespace-nowrap h-16 px-6 max-w-4xl mx-auto mt-2 rounded-lg flex flex-row items-center justify-between">
      {children}
    </nav>
  );
};

export default Navbar;
