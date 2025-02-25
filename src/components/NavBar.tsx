"use client";

import Home from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "Create", href: "/create" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Archive", href: "/archive" },
  { name: "Profile", href: "/profile", extraClasses: "ml-auto" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row w-full h-14 px-60 py-2 bg-black items-center gap-10 text-stone-400">
      <div className="hover:cursor-pointer hover:text-stone-100">
        <Home />
      </div>
      {navLinks.map(({ name, href, extraClasses }) => (
        <div key={href} className={`hover:cursor-pointer hover:text-stone-100 ${extraClasses || ""}`}>
          <Link
            href={href}
            className={pathname === href ? "text-stone-100" : "text-stone-400"}
          >
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
