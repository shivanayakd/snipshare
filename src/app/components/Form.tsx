import Link from "next/link";
import React from "react";
import { useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-5 py-1.5 text-sm border-blue-400 bg-slate-800 rounded-full text-white"
    >
      {/* {pending ? `${type}ing...` : type} */}
      {pending ? `Saving...` : "Submit"}
    </button>
  );
}

const Form = ({ handleCreate }: any) => {

  return (
    <section className="w-full max-w-full h-screen">
      <h1 className="head_text text-center">
        <span className="blue_gradient">Snippet</span>
      </h1>
      <p className="text-left desc max-w-md">
        Snipshare is an open-source Snippet library for modern world to
        discover, create and share powerful snippets
      </p>

      <div className="flex justify-center">
        <form
          action={handleCreate}
          className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        >
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Title
            </span>
            <input
              name="title"
              type="text"
              placeholder="Python array sort"
              required
              className="form_input"
            />
          </label>

          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Your code snippet
            </span>

            <textarea
              name="content"
              placeholder="code"
              required
              className="form_textarea "
            />
          </label>

          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Snippet type
              <span className="font-normal text-xs text-gray-500">
                (#java, #c, #python, etc.)
              </span>
            </span>
            <input
              name="tag"
              type="text"
              placeholder="#Tag"
              required
              className="form_input"
            />
          </label>

          <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" name="private" className="sr-only peer" />
            <div className="w-9 h-5 bg-slate-300  peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-sky-500"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 ">
              Private
            </span>
          </label>

          <div className="flex mx-3 mb-5 gap-3">
            <Link
              href="/"
              className="text-gray-600 text-sm border-solid border-2 border-slate-600 rounded-full py-1.5 px-5"
            >
              Cancel
            </Link>

            <Submit />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
