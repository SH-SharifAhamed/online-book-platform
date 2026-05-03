"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Books", path: "/all-book" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <div className="border-b px-2 bg-[#00134d]">
      <nav className=" flex justify-between items-center text-white font-semibold py-3 max-w-6xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt="pixgen."
              width={40}
              height={40}
            />
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-5 text-sm">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`px-3 py-2 rounded-md ${
                  pathname === link.path
                    ? "bg-linear-to-r from-blue-300 to-purple-600 text-white font-medium"
                    : "text-white hover:from-purple-600 hover:to-blue-500 hover:bg-linear-to-r transition-all duration-300 ease-in-out"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-4">
          <ul className="hidden md:flex items-center gap-5 text-sm">
            <li
              className="px-4 py-1 text-center font-bold rounded-md border border-transparent 
                bg-linear-to-r from-blue-500 to-purple-600 
                text-white hover:opacity-90 transition"
            >
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li
              className="px-4 py-1 text-center font-bold rounded-md border border-transparent 
                bg-linear-to-r from-blue-500 to-purple-600 
                text-white hover:opacity-90 transition"
            >
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>

        <button
          aria-label="Toggle Menu"
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX className="text-red-500" /> : <HiMenu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#00134d] px-4 pb-4">
          <ul className="flex flex-col gap-4 text-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 font-bold rounded-md ${
                    pathname === link.path
                      ? "bg-linear-to-r from-blue-300 to-purple-600 text-white font-medium"
                      : "text-white hover:from-purple-600 hover:to-blue-500 hover:bg-linear-to-r transition-all duration-300 ease-in-out"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/signup"
              className="px-4 py-1 text-center font-bold rounded-md border border-transparent 
                bg-linear-to-r from-blue-500 to-purple-600 
                text-white hover:opacity-90 transition"
            >
              SignUp
            </Link>
            <Link
              href="/signin"
              className="px-4 py-1 text-center font-bold rounded-md border border-transparent 
                bg-linear-to-r from-blue-500 to-purple-600 
                text-white hover:opacity-90 transition"
            >
              SignIn
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
