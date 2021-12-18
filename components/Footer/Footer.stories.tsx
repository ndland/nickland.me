import React from "react";
import { Meta } from "@storybook/react";
import { Footer } from "./Footer";
import LoremIpsum from "react-lorem-ipsum";

export default {
  component: Footer,
  title: "Components/Footer",
} as Meta;

export const Primary = (
  args: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => <Footer />;

export const WithScrollableText = (
  args: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <>
    <LoremIpsum p={10} />
    <Footer />
  </>
);
