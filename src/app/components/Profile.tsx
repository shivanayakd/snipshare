"use client";

import React from "react";
import SearchForm from "./SearchForm";
import { useSession } from "next-auth/react";
import { SnippetCardList } from "./SnippetCardList";

const Profile = ({ snippets }: any) => {
  const { data: session } = useSession();
  const { user } = session ?? {};
  return (
    <section className="w-full">
      <div className="flex mt-5 justify-between items-center">
        <div className="w-full md:w-1/2 md:mx-auto">
          <SearchForm />
        </div>
      </div>
      <div className="flex justify-between items-center pt-9">
        <h1 className="head_text text-left">
          <span className="blue_gradient">Hi {user?.name}</span>
        </h1>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" name="private" className="sr-only peer" />
            <div className="w-9 h-5 bg-slate-300  peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-sky-500"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 ">
              Private
            </span>
          </label>
        </div>
      </div>

      <div className="mt-10">
        <SnippetCardList snippets={snippets} />
      </div>
    </section>
  );
};

export default Profile;
