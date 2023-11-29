'use client';

import React, { useState } from 'react'
import Image from "next/image";

type Props = {
}

const SnippetCard = (props: Props) => {

    const [copied, setCopied] = useState("");

      const handleProfileClick = () => {

      };

      const handleCopy = () => {
      };
    
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src="/assets/images/snippet_share_logo.png"
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              Name
            </h3>
            <p className="font-inter text-sm text-gray-500">
              name@gmail.com
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === 'true'
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === 'true' ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">sdg sdfg sdf sfdg sdfg sdfg sdfg sdfb glsdkjfbg sldjfbg lsdfb glksdfbg lsbfd3jkgblsdfblkgjbasfkdj asfhg asfhdglkafdjb asfgb alfjg sfg</p>
      {/* <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p> */}

      {/* {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div> */}
      {/* )} */}
    </div>
  );
}

export default SnippetCard