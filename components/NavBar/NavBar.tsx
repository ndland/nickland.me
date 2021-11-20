import React, { FC, HTMLAttributes, ReactNode } from "react";

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  label?: string;
}

export const NavBar: FC<NavBarProps> = ({ children, className, label }) => {
  return (
    <div
      aria-label={label}
      className={className?.concat(" sticky top-0 rounded-b-md")}
    >
      {children}
    </div>
  );
};
