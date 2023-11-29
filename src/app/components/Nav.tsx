"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Nav = (props: Props) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const signOut = () => {};

  return (
    <nav className="flex items-center justify-between w-full">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Image
          src="/assets/images/snippet_share_logo.png"
          alt=""
          width={30}
          height={30}
          className="object-contain"
        />
        <p>Snipshare</p>
      </Link>

      {/* Desktop Nav */}

      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-snippet" className="black_btn">
            Add Snippet
          </Link>

          <button type="button" onClick={signOut} className="outline_btn">
            Sign Out
          </button>

          <Link href="/profile">
            <Image
              src="/assets/images/snippet_share_logo.png"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src="/assets/images/snippet_share_logo.png"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          />

          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/profile"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                href="/create-snippet"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>
              <button
                type="button"
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
                className="mt-5 w-full black_btn"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
