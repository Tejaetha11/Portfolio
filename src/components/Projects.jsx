import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { cn } from "../lib/utils"; 
import { FaGithub } from 'react-icons/fa';
import Lenis from 'lenis';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectImage from "./utils/ProjectImage";

const projects = [
  {
    title: "Amazon Website Clone",
    description:
      "A fully responsive Amazon clone built with React and Flask, featuring smooth navigation, dynamic product listings, and integrated MySQL database for seamless functionality.",
    link: "https://bespoke-babka-0ee821.netlify.app/",
    github: "https://github.com/Tejaetha11/",
    image: "/Amazon_Website.png",
    blurhash: "L02$Hd9Z00~pneofp0WB00?a~V01"
  },
  {
    title: "Virtual Pet Simulator",
    description:
      "A fun and interactive virtual pet simulator where users can feed, play, and care for their pets, built with engaging animations and responsive controls.",
    link: "https://virtualpetsimulator.netlify.app/",
    github: "https://github.com/Tejaetha11/",
    image: "/virtual_pet.png",
    blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH"
  },
  {
    title: "Virtual Art Gallery",
    description:
      "An immersive virtual art gallery showcasing artworks in a 3D interactive space, allowing users to explore, navigate, and experience art digitally.",
    link: "https://glistening-starburst-1128bc.netlify.app/",
    github: "https://github.com/Tejaetha11/",
    image: "/virtual_art.png",
    blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH"
  },
  {
    title: "Super Mario Clone",
    description:
      "A browser-based Super Mario clone recreating the classic platformer experience — complete with running, jumping, enemy collisions, coin collection, and level progression. Built from scratch using vanilla JavaScript and HTML5 Canvas.",
    link: "https://super-mario1.netlify.app/",
    github: "https://github.com/Tejaetha11/Super-Mario-Clone.git",
    image: "/supermario.png",
    blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH"
  },
  {
    title: "Street Fighter Clone",
    description:
      "A two-player Street Fighter clone built in the browser, featuring character animations, attack combos, health bars, and real-time combat mechanics — all powered by HTML5 Canvas and JavaScript game loops.",
    link: "https://street-fighter1.netlify.app/",
    github: "https://github.com/Tejaetha11/Street-Fighter-clone.git",
    image: "/streetfighter.png",
    blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH"
  },
  {
    title: "Tower Defense Game",
    description:
      "A fully playable tower defense game where players strategically place towers to stop waves of enemies from reaching the base. Features multiple tower types, enemy wave progression, and dynamic pathfinding — built with JavaScript and HTML5 Canvas.",
    link: "https://tower-defense11.netlify.app/",
    github: "https://github.com/Tejaetha11/Tower-Defense-Game.git",
    image: "/towerdefense.png",
    blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH"
  }
];

const Projects = () => {

  const scrollLineRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(scrollLineRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 px-4 bg-black">
      
      <div
        ref={scrollLineRef}
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-b from-neutral-200 to-neutral-500 w-0 z-50"
      ></div>

      {/* Dot Background Layer */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Mask Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Section Title */}
      <div className="relative z-10 mb-12 text-center">
        <h2 className="ml-[45px] text-3xl md:text-5xl font-bold text-transparent [-webkit-text-stroke:2px_#22d3ee] drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] hover:drop-shadow-[0_0_40px_rgba(34,211,238,1)] transition-all duration-300">
          Things I've been building 🚀
        </h2>
        <p className="mt-4 text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
          Exploring ideas, solving problems, and having fun with code — here's what I've built so far.
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-x-4 gap-y-6 items-start">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-[30rem] rounded-xl p-6 border flex flex-col justify-between">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 text-sm max-w-sm mt-2"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <ProjectImage
                  image={project.image}
                  blurhash={project.blurhash}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-xl"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl border border-white/20 text-white text-xs font-bold flex items-center gap-2 hover:bg-white/10 transition"
                >
                  <FaGithub className="w-4 h-4" /> GitHub
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                >
                  Live →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div className="mt-12">
        <a 
          href="https://github.com/Tejaetha11/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-7 ring-1 ring-white/10">
            <span>For More</span>
            <FaGithub className="h-6 w-6 text-white" />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </a>
      </div>
    </div>
  );
};

export default Projects;