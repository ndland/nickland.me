import React, { FC, HTMLAttributes, ReactNode } from "react";

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  classes?: string;
}

export const NavBar: FC<NavBarProps> = ({ children, classes }) => {
  return (
    <div className={classes?.concat(" sticky top-0 rounded-b-md")}>
      {children}
    </div>
  );
};
