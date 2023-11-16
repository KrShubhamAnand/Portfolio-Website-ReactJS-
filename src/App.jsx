import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import myAvatarP from "./images/myAvatarP.png";
import codeImg from "./images/code.png";
import consultImg from "./images/consulting.png";
import designImg from "./images/design.png";
import web1 from "./images/web1.png";
import web5 from "./images/web5.png";
import web3 from "./images/web3.png";
import web6 from "./images/web6.png";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import "./App.css";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons dark:text-stone-500">
                Kr.Shubham Anand
              </h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl dark:text-stone-300"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                    href="#"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                Kr.Shubham Anand
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-stone-400">
                <span>
                  I am a Full Stack Developer based out of Kolkata,India.
                </span>
              </h3>
              <p className="text-md py-5 leadind-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-stone-300">
                I am a Self taught Web Developer who is focused,quick-learner
                and passionate about coding and trying out new things.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-700 ">
              <AiFillLinkedin className="dark:bg-sky-600 rounded-md" />
              <AiFillTwitterCircle className="dark:bg-sky-500 rounded-md" />
              <AiFillInstagram className="dark:bg-fuchsia-700 rounded-md" />
            </div>
            <div className="realtive mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <img src={myAvatarP} layout="fill" objectFit="cover"></img>
            </div>
          </section>

          <section>
            <div className="flex justify-center">
              <h3 className="text-3xl py-1 dark:text-stone-300">
                Services i Offer
              </h3>
            </div>

            <div className="flex justify-center lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img src={designImg} width={100} height={100}></img>
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  We give it all to match your expectations and beyond & provide
                  you elegant designs suited to you.
                </p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img src={consultImg} width={100} height={100}></img>
                <h3 className="text-lg font-medium pt-8 pb-2">Say Hello!</h3>
                <p className="py-2">
                  I am available for development-related work and full time job
                  opportunities.Feel free to reach out.
                </p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img src={codeImg} width={100} height={100}></img>
                <h3 className="text-lg font-medium pt-8 pb-2">Codes</h3>
                <p className="py-2">
                  You can find the source code on my Github.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-center">
              <h3 className="text-3xl py-1 dark:text-stone-300">Portfolio</h3>
            </div>
            <div className="flex justify-center">
              <p className="text-md py-5 leadind-8 text-gray-800 dark:text-stone-300">
                Here is a showcase of some of the best projects that i made.
              </p>
            </div>

            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 ">
                <img
                  src={web1}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                ></img>
              </div>
              <div>
                <img
                  src={web3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                ></img>
              </div>
              <div>
                <img
                  src={web5}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                ></img>
              </div>
              <div>
                <img
                  src={web6}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                ></img>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" flex justify-center text-3xl py-1 dark:text-stone-300">
                  Skills
                </h3>
                <p className="text-md py-5 leadind-8 text-gray-800 dark:text-stone-300">
                  An individual eager to learn and explore new fields of life &
                  technology,with good problem solving skills & fast learning
                  abilities. Particularly interested in the field of
                  <span className="text-teal-400">  Web Development </span> &
                  technologies like{" "}
                  <span className="text-teal-400">ReactJS</span>,{" "}
                  <span className="text-teal-400">NodeJS</span>,&{" "}
                  <span className="text-teal-400">MongoDB </span>& not shy to
                  learn new things.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
