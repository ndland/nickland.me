import React, { FC, HTMLAttributes } from "react";

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  classes?: string;
  url: string;
}

export const NavBar: FC<NavBarProps> = ({ url }) => {
  return (
    <div className="sticky top-0 items-center justify-between flex bg-gray-800 px-12 py-4 my-0 mx-0 shadow-2xl">
      <div className="text-2xl text-white font-semibold inline-flex items-center">
        <img src={url} className="w-16 mr-4" alt="logo-img" />
        <span>tailwindcss</span>
      </div>
    </div>
  );
};
