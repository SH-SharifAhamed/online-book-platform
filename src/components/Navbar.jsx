"use client";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
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

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Books</Link>
          </li>

          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4 ">
          <ul className="flex items-center gap-5 text-sm">
            <li className="px-3 py-1 border rounded-md">
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li className="px-3 py-1 border rounded-md">
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
