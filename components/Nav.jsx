"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPowerOff } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex justify-between w-full mt-6 pt-3 text-lg ">
      <Link href="/" className="flex gap-2 flex-center">
        {/* <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className=""
        /> */}
        <p className="text-2xl font-bold text-red-400">getPrompt</p>
      </Link>
      <div className="">
        <div className="flex items-center gap-3 md:gap-5">
          <Link
            href="/create-prompt"
            className="border-b border-b-red-400 hover:bg-red-400 text-white py-1 px-2 rounded-md"
          >
            createPost
          </Link>

          <button type="button" className="text-red-400">
            <FaPowerOff />
          </button>

          {/* <Link href="/profile">
            <Image
              src=""
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
            />
          </Link> */}
        </div>

        <>
          <button type="button" className="hidden">
            signIn
          </button>
        </>
      </div>
    </nav>
  );
};

export default Nav;
