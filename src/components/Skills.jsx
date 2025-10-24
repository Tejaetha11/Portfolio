import React, { useRef } from "react";
import { cn } from "../lib/utils";
import { CardSpotlight } from "./ui/card-spotlight";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
} from "react-icons/fa";

const Skills = () => {
  const colors = [
    [138, 43, 226],  // Purple - React
    [147, 112, 219], // Light Purple - HTML
    [186, 85, 211],  // Medium Purple - CSS
    [153, 50, 204],  // Dark Purple - JS
    [218, 112, 214], // Python
    [0, 105, 148],   // MySQL
    [56, 189, 248],  // Tailwind
    [104, 160, 99],  // Node.js
    [255, 136, 0],   // Postman
    [0, 201, 167],   // React Native
    [86, 61, 124],   // Bootstrap - Deep Violet
    [242, 101, 34],  // Flask - Orange
  ];

  const icons = [
    <FaReact key="react" className="text-white text-xl" />,
    <FaHtml5 key="html" className="text-white text-xl" />,
    <FaCss3Alt key="css" className="text-white text-xl" />,
    <FaJs key="js" className="text-white text-xl" />,
    <FaPython key="python" className="text-white text-xl" />,
    <img
      key="MySQL"
      src="/mysql_logo.png"
      alt="Mysql"
      className="w-15 h-15 p-1 object-contain"
    />,
    <img
      key="Tailwind"
      src="/tailwind.png"
      alt="Tailwind"
      className="w-9 h-9 p-1 object-contain"
    />,
    <img
      key="NodeJS_logo"
      src="/NodeJS_Logo.png"
      alt="NodeJS"
      className="w-13 h-12 p-1 object-contain"
    />,
    <img
      key="Postman_Logo"
      src="/Postman_Logo.png"
      alt="Postman"
      className="w-15 h-15 p-1 object-contain"
    />,
    <img
      key="React_Native_Logo"
      src="/react_native_logo.png"
      alt="React Native"
      className="w-11 h-12 px-1 pb-1 object-contain"
    />,
    <img
      key="Bootstrap_Logo"
      src="/bootstrap_logo.png"
      alt="Bootstrap"
      className="w-11 h-11 p-1 object-contain"
    />,
    <img
      key="Flask_Logo"
      src="/flask_logo.png"
      alt="Flask"
      className="w-12 h-12 p-1 object-contain"
    />,
  ];

  const audioSources = [
    "/e6-piano.mp3",
    "/d6-piano.mp3",
    "/b6-piano.mp3",
    "/g6-piano.mp3",
    "/f6-piano.mp3",
    "/a6-piano.mp3",
    "/c6-piano.mp3",
    "/d6-piano.mp3",
    "/e6-piano.mp3",
    "/a6-piano.mp3",
    "/c6-piano.mp3", // Bootstrap
    "/f6-piano.mp3", // Flask
  ];

  const audioRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const audio = new Audio(audioSources[index]);
    audioRefs.current[index] = audio;
    audio.play();
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-12 sm:py-20 bg-black">
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 z-0 pointer-events-none",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Mask */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Animated Gradient Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center z-20 mb-4 sm:mb-6">
        <span 
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(90deg, #a855f7, #ec4899, #ef4444, #f59e0b, #10b981, #3b82f6, #a855f7)',
            backgroundSize: '200% auto',
            animation: 'gradient 4s linear infinite'
          }}
        >
          Tools in My Arsenal
        </span>
      </h2>

      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>

      {/* Prompts */}
      <div className="z-20 mb-6 text-lg font-semibold text-center">
        <p className="block sm:hidden bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Try tapping on the icons 🎵
        </p>
        <p className="hidden sm:block bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Hover over the icons to hear a sound 🎵
        </p>
      </div>

      {/* Icon Cards */}
      <div className="relative z-20 flex justify-center gap-3 flex-wrap max-w-5xl w-full">
        {icons.map((icon, index) => (
          <CardSpotlight
            key={index}
            className="h-18 w-18 rounded-full flex items-center justify-center bg-black"
            color={`rgb(${colors[index][0]}, ${colors[index][1]}, ${colors[index][2]})`}
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleMouseEnter(index)}
          >
            <div className="relative z-20">{icon}</div>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
};

export default Skills;