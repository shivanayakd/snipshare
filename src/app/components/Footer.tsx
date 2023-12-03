import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="text-center pt-14 pb-8">
      <p className="text-gray-500">
        A project by
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </p>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-2 flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-6 py-2 transition-all duration-75 hover:scale-105"
      >
        <p className="font-medium text-gray-600">Buy me a coffee</p>
      </a>
    </div>
  );
}

export default Footer