import React from "react";
import { Meta } from "@storybook/react";
import { NavBar, NavBarProps } from "./NavBar";
import LoremIpsum from "react-lorem-ipsum";

export default {
  component: NavBar,
  title: "Components/NavBar",
} as Meta;

export const Primary = (
  args: JSX.IntrinsicAttributes & NavBarProps & { children?: React.ReactNode }
) => (
  <NavBar {...args}>
    <div className="flex items-center py-2 w-16 mr-4">
      <img
        alt="tailwind"
        src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
      />
      <div className="text-white ml-2">NickLand.me</div>
    </div>
  </NavBar>
);
Primary.args = {
  className: "items-center justify-between flex bg-gray-800 px-2",
};

export const WithScrollableText = (
  args: JSX.IntrinsicAttributes & NavBarProps & { children?: React.ReactNode }
) => {
  return (
    <>
      <NavBar {...args}>
        <div className="flex items-center py-2 w-16 mr-4">
          <img
            alt="tailwind"
            src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
          />
          <div className="text-white ml-2">NickLand.me</div>
        </div>
      </NavBar>
      <LoremIpsum p={10} />
    </>
  );
};
WithScrollableText.args = {
  ...Primary.args,
};

export const WithNoImage = (
  args: JSX.IntrinsicAttributes & NavBarProps & { children?: React.ReactNode }
) => {
  return (
    <NavBar {...args}>
      <div className="text-white p-2">NickLand.me</div>
    </NavBar>
  );
};
WithNoImage.args = {
  ...Primary.args,
};
