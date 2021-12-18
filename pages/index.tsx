import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex justify-center items-center space-x-12">
        <img
          className="h-48 w-48 rounded-full"
          alt="The author"
          src="me.jpeg"
        />
        <div className="space-y-2">
          <div className="text-gray-400">#FullStackDeveloper</div>
          <div className="text-5xl font-bold">Nick Land</div>
          <div>Full-Stack developer. Lifelong Learner. Hobbyist.</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-gray-500 font-sans font-semibold">
          I am currently working on this site. I will be updating quite
          frequently. Check back for more updates!
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
