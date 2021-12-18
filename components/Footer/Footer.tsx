import { HeartIcon } from "@heroicons/react/solid";

export const Footer = () => {
  return (
    <footer className="flex justify-center px-3 py-4 bg-gray-800 text-white">
      <span className="mr-4">This site was made with the following:</span>
      <ul className="flex space-x-4">
        <li>
          <a
            className="hover:underline hover:text-gray-400"
            href="https://tailwindcss.com/"
          >
            Tailwind CSS
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:text-gray-400"
            href="https://nextjs.org/"
          >
            NextJS
          </a>
        </li>
      </ul>
      <div className="flex items-center ml-4">
        A lot of Love
        <HeartIcon className="h-5 w-5 text-red-500 ml-2" />
      </div>
    </footer>
  );
};
