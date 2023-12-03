"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Nav = (props: Props) => {
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);

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
        {session && session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-snippet" className="black_btn">
              Add Snippet
            </Link>

            <button
              type="button"
              onClick={() => {
                signOut();
              }}
              className="outline_btn"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user?.image as string}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              signIn();
            }}
            className="black_btn"
          >
            Sign in
          </button>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex relative">
        {session && session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image as string}
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
                  Create snippet
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
        ) : (
          <button
            type="button"
            onClick={() => {
              signIn();
            }}
            className="black_btn"
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
