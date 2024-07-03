// components/UserProfileCard.js
import React from "react";
import Button from "../Button/Button";

const UserProfileCard = () => {
  return (
    <div>
      
        href="#"
        className="group relative block overflow-hidden bg-white border rounded-lg border-gray-100"
      >
        <button className="absolute end-2 top-2 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">{lang("wishList")}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
          alt=""
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52"
        />

        <div className="relative p-4">
          <span className="whitespace-nowrap bg-yellow-400 px-2 py-1 text-xs font-medium">
            New
          </span>

          <h3 className="mt-2 text-base font-medium text-gray-900">
            Robot Toy
          </h3>

          <p className="mt-1 text-sm text-gray-700">$14.99</p>

          <form className="mt-3">
            <Button />
          </form>
        </div>
      </a>
    </div>
  );
};

export default UserProfileCard;
