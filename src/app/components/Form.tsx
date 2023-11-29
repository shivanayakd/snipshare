import Link from 'next/link';
import React from 'react'

type Props = { };

const Form = (props: Props) => {
  return (
    <section className="w-full max-w-full h-screen flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Snippet</span>
      </h1>
      <p className="text-left desc max-w-md">
        Snipshare is an open-source Snippet library for modern world to
        discover, create and share powerful snippets
      </p>

      <form
        onSubmit={() => {}}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            value=""
            onChange={(e) => {}}
            placeholder="Write your post here"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Field of Prompt{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value=""
            onChange={(e) => {}}
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            // disabled
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {/* {submitting ? `${type}ing...` : type} */}
            Submitting ...
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form