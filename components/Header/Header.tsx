import { NavBar } from "../NavBar";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <NavBar
      label="navbar"
      className="text-white bg-gray-800 text-center flex justify-between items-center p-4"
    >
      <button className="text-3xl" onClick={() => router.push("/")}>
        Nickland.me
      </button>
      <div className="flex space-x-4">
        <button
          className={`${router.pathname === "/about" && "text-green-300"}`}
          onClick={() => router.push("/about")}
        >
          About
        </button>
        <button
          className={`${router.pathname === "/contact" && "text-green-300"}`}
          onClick={() => router.push("/contact")}
        >
          Contact
        </button>
      </div>
    </NavBar>
  );
};
