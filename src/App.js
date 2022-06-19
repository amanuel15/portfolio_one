import { useEffect, useRef } from "react";

import consoleText from "./util/console";
import shadowAnimation from "./util/shadow_animation";

import FullSection from "./components/fullSection";
import SkillCard from "./components/skillCard";

function App() {
  useEffect(() => {
    consoleText(
      ["Software Engineer.", "Full Stack Developer.", "Mobile Developer."],
      spanRef,
      ["tomato", "cyan", "darkorchid"],
      underscoreRef
    );
    shadowAnimation(titleRef);
  }, []);
  const spanRef = useRef();
  const underscoreRef = useRef();
  const titleRef = useRef();

  return (
    <div className="mx-auto bg-slate-700 flex sm:flex-row flex-col text-white">
      <div className="sm:hidden">top</div>
      <div className="lg:w-44 md:w-40 sm:w-36 sm:block hidden bg-slate-800 p-2 text-white text-center fixed bottom-0 top-0 right-auto h-screen z-10">
        <p className=" text-4xl py-10 font-bold">Aman</p>
        <ul className=" last:border-b-2 last:border-slate-700 mt-10 cursor-pointer">
          <li className="py-4 text-lg hover:text-orange-500 border-t-2 border-slate-700 font-semibold group">
            <p className=" transition-all ease-in group-hover:text-2xl duration-200">
              About
            </p>
          </li>
          <li className="py-4 text-lg hover:text-orange-500 border-t-2 border-slate-700 font-semibold group">
            <p className=" ease-in group-hover:text-2xl duration-200">Skills</p>
          </li>
          <li className="py-4 text-lg hover:text-orange-500 border-t-2 border-slate-700 font-semibold group">
            <p className=" ease-in group-hover:text-2xl duration-200">Work</p>
          </li>
          <li className="py-4 text-lg hover:text-orange-500 border-t-2 border-slate-700 font-semibold group">
            <p className=" ease-in group-hover:text-2xl duration-200">
              Experiance
            </p>
          </li>
          <li className="py-4 text-lg hover:text-orange-500 border-t-2 border-slate-700 font-semibold group">
            <p className=" ease-in group-hover:text-2xl duration-200">
              Contact
            </p>
          </li>
        </ul>
      </div>
      <div className="relative min-h-screen bg-slate-700 lg:ml-44 md:ml-40 sm:ml-36 w-full">
        <section className="px-6 h-screen flex flex-col justify-center text-white bg-[url('../assets/bg-1.jpg')] bg-cover bg-no-repeat w-full flex-1">
          <h1
            className=" lg:text-9xl md:text-8xl sm:text-6xl text-3xl font-bold font-mono"
            ref={titleRef}
            onMouseMove={(e) => shadowAnimation(e, titleRef)}
          >
            Hi <br /> I'm Amanuel
          </h1>
          <div className="console-container lg:h-72 md:h-48 sm:h-28 h-20">
            <span
              id="text"
              className=" lg:text-8xl md:text-7xl sm:text-5xl text-3xl font-bold font-mono"
              ref={spanRef}
            ></span>
            <div
              className="console-underscore text-7xl"
              id="console"
              ref={underscoreRef}
            >
              &#95;
            </div>
          </div>
        </section>
        <FullSection>
          <div className="md:flex justify-between px-6 gap-9">
            <div className=" flex-1">
              <h1 className=" text-8xl text-orange-500 font-bold font-serif pr-6 mb-8">
                Skills
              </h1>
              <p className=" font-medium font-serif pl-4">
                I am a software engineer who is dedicated to his craft and is
                eager to learn new technologies.
                <br />
                <br /> I am passionate about mobile and full-stack development
                with a good experience on technologies like react-native,
                react.js, node.js, express, flutter, vue.js and many alike. I
                have worked in agile teams and have proved to be very adaptable
                to many environments. <br /> <br />I always try to avoid
                miscommunication and poor requirement gathering, as I have had a
                first hand experience of the headaches this discrepancies could
                lead to. I am an agile software engineer, meaning the frameworks
                I have mentioned are not the be all end all for me, I am more
                than willing to learn any frameworks / technologies that a
                project requires.
              </p>
            </div>
            <div className=" flex-1 flex flex-wrap md:gap-3 gap-2 md:mt-0 mt-4 justify-center">
              <SkillCard
                title="React Native"
                subTitle="2 years"
                desc="I have had a
                first hand experience of the headaches this discrepancies could
                lead to"
              />
              <SkillCard
                title="React JS"
                subTitle="2 years"
                desc="I have had a
                first hand experience of the headaches this discrepancies could
                lead to"
              />
              <SkillCard
                title="Node JS"
                subTitle="Long time"
                desc="I have had a
                first hand experience of the headaches this discrepancies could
                lead to"
              />
              <SkillCard
                title="Flutter"
                subTitle="As a freelancer"
                desc="I have had a
                first hand experience of the headaches this discrepancies could
                lead to"
              />
            </div>
          </div>
        </FullSection>
      </div>
    </div>
  );
}

export default App;
