import { useEffect, useRef, useState } from "react";

import consoleText from "./util/console";
import shadowAnimation from "./util/shadow_animation";
import * as experience from "./raw/experiences.json";

import FullSection from "./components/fullSection";
import SkillCard from "./components/skillCard";
import ExperienceDetail from "./components/experienceDetail";
import MobileNav from "./components/mobileNav";

import { NavHashLink } from "react-router-hash-link";
import { HiMenu, HiX } from "react-icons/hi";

function App() {
  const [selectedExper, setSelectedExper] = useState(
    Object.keys(experience)[0]
  );
  const [showMenuSection, setShowMenuSection] = useState(false);

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

  const menuRef = useRef();

  const showMenu = () => {
    console.log("Show");
    setShowMenuSection(true);
    document.body.style.overflow = "hidden";
    menuRef.current.classList.remove("hidden");
  };

  const hideMenu = () => {
    console.log("Hide");
    setShowMenuSection(false);
    document.body.style.overflow = "auto";
    menuRef.current.classList.add("hidden");
  };

  return (
    <div className="mx-auto bg-slate-700 flex sm:flex-row flex-col text-white">
      {/* <div className="sm:hidden">top</div> */}
      {/* <MobileNav /> */}
      {showMenuSection && (
        <div
          className=" text-2xl absolute top-4 right-4 z-10 sm:hidden"
          onClick={hideMenu}
        >
          <HiX />
        </div>
      )}
      {!showMenuSection && (
        <div
          className=" text-2xl absolute top-4 right-4 sm:hidden text-white z-10"
          onClick={showMenu}
        >
          <HiMenu />
        </div>
      )}
      <section
        className="min-h-screen flex flex-col justify-center py-3 bg-gray-800 border-b-2 border-slate-600 sm:hidden hidden transition-all duration-500 overflow-hidden"
        ref={menuRef}
      >
        <MobileNav hideMenu={hideMenu} />
      </section>
      <div className="lg:w-44 md:w-40 sm:w-36 sm:block hidden bg-slate-800 p-2 text-white text-center fixed bottom-0 top-0 right-auto min-h-screen z-10">
        <p className=" text-4xl py-10 font-bold">Aman</p>
        <ul className=" last:border-b-2 last:border-slate-700 mt-10 cursor-pointer">
          <li className="py-4 text-lg hover:text-orange-500 border-t-2 border-slate-700 font-semibold group">
            <p className=" transition-all ease-in group-hover:text-2xl duration-200">
              <NavHashLink
                smooth
                to="/#about"
                className={({ isActive }) =>
                  document.location.hash == "#about"
                    ? "text-orange-500"
                    : undefined
                }
              >
                About
              </NavHashLink>
            </p>
          </li>
          <li className="py-4 text-lg hover:text-orange-500 border-t-2 border-slate-700 font-semibold group">
            <p className=" ease-in group-hover:text-2xl duration-200">
              <NavHashLink
                smooth
                to="#skills"
                className={({ isActive }) =>
                  document.location.hash == "#skills"
                    ? "text-orange-500"
                    : undefined
                }
              >
                Skills
              </NavHashLink>
            </p>
          </li>
          <li className="py-4 text-lg hover:text-orange-500 border-t-2 border-slate-700 font-semibold group">
            <p className=" ease-in group-hover:text-2xl duration-200">
              <NavHashLink
                smooth
                to="#work"
                className={({ isActive }) =>
                  document.location.hash == "#work"
                    ? "text-orange-500"
                    : undefined
                }
                onClick={() => console.log("Curr : ", document.activeElement)}
              >
                Work
              </NavHashLink>
            </p>
          </li>
          <li className="py-4 text-lg hover:text-orange-500 border-t-2 border-slate-700 font-semibold group">
            <p className=" ease-in group-hover:text-2xl duration-200">
              <NavHashLink
                smooth
                to="#experience"
                className={({ isActive }) =>
                  document.location.hash == "#experience"
                    ? "text-orange-500"
                    : undefined
                }
              >
                Experience
              </NavHashLink>
            </p>
          </li>
          <li className="py-4 text-lg hover:text-orange-500 border-t-2 border-slate-700 font-semibold group">
            <p className=" ease-in group-hover:text-2xl duration-200">
              <NavHashLink
                smooth
                to="#contact"
                className={({ isActive }) =>
                  document.location.hash == "#contact"
                    ? "text-orange-500"
                    : undefined
                }
              >
                Contact
              </NavHashLink>
            </p>
          </li>
        </ul>
      </div>
      <div className="relative min-h-screen bg-slate-700 lg:ml-44 md:ml-40 sm:ml-36 w-full">
        <section
          className="px-6 h-screen flex flex-col justify-center text-white bg-[url('../assets/bg-1.jpg')] bg-cover bg-no-repeat w-full flex-1"
          id="about"
        >
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
        <FullSection id="skills">
          <div
            className="md:flex justify-between px-6 gap-9"
            onFocusCapture={() => console.log("Focused skills:: ")}
            // onPointerOver={() => {
            //   document.location.hash = "#skills";
            // }}
            // onScroll={(e) => console.log("Scrolled over skills: ", e)}
          >
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
                <br />
                <br />
                Visit my{" "}
                <a
                  href="https://www.linkedin.com/in/amanuel-g/"
                  className=" text-red-600"
                  target="_blank"
                >
                  LinkedIn
                </a>{" "}
                and my{" "}
                <a
                  href="https://github.com/amanuel15"
                  className="text-red-600"
                  target="_blank"
                >
                  Github
                </a>{" "}
                for more.
              </p>
            </div>
            <div className=" flex-1 flex flex-wrap md:gap-3 gap-2 md:mt-0 mt-4 justify-center">
              <SkillCard
                title="React Native"
                subTitle="As an employee and freelancer"
                desc="I have had an extensive experience working with react native including my biggest project yet, a booking and e-commerce application for Moenco"
              />
              <SkillCard
                title="React JS"
                subTitle="As an employee and freelancer"
                desc="I have designed and delivered multiple web applications using react and other react based frameworks like docusaurus"
              />
              <SkillCard
                title="Node JS"
                subTitle="As an employee and freelancer"
                desc="I have built various backend REST APIs both for a client and personal projects. I have also built CLIs with node like npmjs.com/package/mega-pkg"
              />
              <SkillCard
                title="Flutter"
                subTitle="As an employee and freelancer"
                desc="I have used flutter to build multiple mobile applications including my final project for university, I also have deep knowledge of dart"
              />
              {/* <SkillCard
                title="Vue.js"
                subTitle="As a freelancer"
                desc="I have had a
                first hand experience of the headaches this discrepancies could
                lead to"
              /> */}
            </div>
          </div>
        </FullSection>
        <FullSection id="experience">
          <div className="self-center w-3/4 h-96 mx-auto">
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold font-serif md:mb-9 mb-3 slash flex">
              Where I've Worked
            </h2>
            <div className="flex gap-6">
              <ul className=" text-orange-500 cursor-pointer transition-all duration-300">
                {Object.keys(experience).map((key) => {
                  if (key != "default")
                    return (
                      <li
                        className={`border-l-4 pl-5 ${
                          key == selectedExper
                            ? "border-orange-500"
                            : "border-slate-600"
                        } hover:bg-slate-600 py-4 pr-3`}
                        onClick={() => setSelectedExper(key)}
                        key={key}
                      >
                        {key}
                      </li>
                    );
                })}
              </ul>
              <ExperienceDetail
                detail={experience[selectedExper]}
                place={selectedExper}
              />
            </div>
          </div>
        </FullSection>
        <FullSection id="contact">
          <div className=" mx-auto w-2/3">
            <h1 className=" text-5xl text-orange-500 font-serif sm:mb-10 mb-7 font-bold">
              Contact Me
            </h1>
            <p className="text-gray-300 sm:mb-5 mb-3 font-extralight font-serif">
              I???m interested in freelance opportunities ??? especially ambitious
              or large projects. However, if you have other request or question,
              don???t hesitate to use the form.
            </p>
            <div className="flex justify-between gap-2 mb-3 w-full">
              <input
                className="bg-gray-800 p-4 rounded-md focus:rounded-none w-1/2 focus:border-b-2 focus:border-b-orange-500 focus:outline-none focus:-translate-y-1 transition-transform duration-300"
                placeholder="Name"
              />
              <input
                className=" bg-gray-800 p-4 rounded-md w-1/2 focus:rounded-none focus:border-b-2 focus:border-b-orange-500 focus:outline-none focus:-translate-y-1 transition-transform duration-300"
                placeholder="Email"
              />
            </div>
            <input
              className="flex-1 bg-gray-800 p-4 rounded-md w-full mb-3 focus:rounded-none focus:border-b-2 focus:border-b-orange-500 focus:outline-none focus:-translate-y-1 transition-transform duration-300"
              placeholder="Subject"
            />
            <textarea
              className="flex-1 bg-gray-800 p-4 rounded-md w-full md:min-h-[10rem] min-h-[8rem] focus:rounded-none focus:border-b-2 focus:border-b-orange-500 focus:outline-none focus:-translate-y-1 transition-transform duration-300"
              placeholder="Message"
            />
          </div>
        </FullSection>
      </div>
    </div>
  );
}

export default App;
