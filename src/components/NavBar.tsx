import Home from "./Logo";
const NavBar = () => {
  return (
    <div className="flex flex-row w-full h-14 px-60 bg-black items-center gap-10 text-stone-400">
      <div className="hover:cursor-pointer hover:text-stone-100">
        <Home/>
      </div>
      <div className="hover:cursor-pointer hover:text-stone-100">Projects</div>
      <div className="hover:cursor-pointer hover:text-stone-100">Create</div>
      <div className="hover:cursor-pointer hover:text-stone-100">Dashboard</div>
      <div className="hover:cursor-pointer hover:text-stone-100">Archive</div>
      <div className="hover:cursor-pointer hover:text-stone-100 ml-auto">
        Profile
      </div>
    </div>
  );
};

export default NavBar;
