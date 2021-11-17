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
) => <NavBar {...args} />;
Primary.args = {
  url:
    "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
};

export const WithScrollableText = (
  args: JSX.IntrinsicAttributes & NavBarProps & { children?: React.ReactNode }
) => {
  return (
    <>
      <NavBar {...args} />
      <LoremIpsum p={10} />
    </>
  );
};
WithScrollableText.args = {
  ...Primary.args,
};

export const WithAlternateLogo = (
  args: JSX.IntrinsicAttributes & NavBarProps & { children?: React.ReactNode }
) => {
  return <NavBar {...args} />;
};
WithAlternateLogo.args = {
  url:
    "https://seeklogo.com/images/G/general-motors-logo-0CD2430569-seeklogo.com.png",
};
