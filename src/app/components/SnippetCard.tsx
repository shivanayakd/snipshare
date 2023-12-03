"use client";

import React, { useState } from "react";
import Image from "next/image";

const SnippetCard = ({ snippet }: any) => {
  const { author: {username, email, image}, title, content } = snippet;
  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {};

  const handleCopy = () => {
        setCopied(content);
        navigator.clipboard.writeText(content);
        setTimeout(() => setCopied(''), 3000);
  };

  return (
    <div className="snippet_card">
      <div className="flex justify-between items-start gap-5">
        <div>
          <span>
            {title}
          </span>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === content
                ? "/assets/images/tick.png"
                : "/assets/images/copy.png"
            }
            alt={copied === content ? "tick_icon" : "copy_icon"}
            width={15}
            height={15}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        {content}
      </p>

      <div
        className="flex-1 flex justify-end items-center gap-3 cursor-pointer"
        onClick={handleProfileClick}
      >
        <Image
          src={image}
          alt="user_image"
          width={30}
          height={30}
          className="rounded-full object-contain"
        />

        <div className="flex flex-col">
          <h3 className="font-satoshi text-xs text-gray-900">
            {username}
          </h3>
          <p className="font-inter text-xs text-gray-500">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default SnippetCard;
