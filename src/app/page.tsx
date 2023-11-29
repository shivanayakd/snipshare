import Image from "next/image";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <section className="w-full pt-5 flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share &nbsp; 
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
           Powerful code snippets
        </span>
      </h1>
      <p className="desc">
        Snipshare is an open-source Snippet library for modern world to
        discover, create and share powerful snippets
      </p>
      <Feed />
    </section>
  );
}
