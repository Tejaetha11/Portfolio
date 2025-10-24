import React from 'react';
import { cn } from "../lib/utils";
import BlurImage from './utils/BlurImage';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">
      <Helmet>
        <title>TejaRaju Eeta | Full Stack Developer</title>
        <meta
          name="description"
          content="Learn more about TejaRaju Eeta, a passionate full stack developer skilled in HTML, CSS, Tailwind, JavaScript, React, Python, Flask, and MySQL."
        />
        <link rel="canonical" href="https://tejarajueeta.vercel.app/about" />
        <meta property="og:title" content="About TejaRaju Eeta | Full Stack Developer" />
        <meta
          property="og:description"
          content="Discover TejaRaju Eeta's journey as a full stack developer passionate about web development, backend engineering, and creating impactful digital experiences."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://tejarajueeta.vercel.app/about" />
        <meta property="og:image" content="https://tejarajueeta.vercel.app/profile_pic.png" />
        <meta property="og:site_name" content="TejaRaju Eeta's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About TejaRaju Eeta | Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Explore TejaRaju Eeta's profile — a full stack developer experienced in HTML, CSS, Tailwind, JavaScript, React, Python, Flask, and MySQL."
        />
        <meta name="twitter:image" content="https://tejarajueeta.vercel.app/profile_pic.png" />
      </Helmet>

      {/* Background pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Faded radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="relative w-65 h-65 rounded-full overflow-hidden flex-shrink-0 border-4 border-neutral-800 bg-neutral-900">
          <BlurImage
            src="/profile_pic.png"
            blurhash="LAB._mEN5SkC-TNdofWX0hay}=WC"
            alt="TejaRaju Eeta"
            className="w-64 h-84 object-contain scale-100"
          />
        </div>

        {/* Text Content */}
        <div className="text-left text-neutral-300 max-w-2xl ml-8 md:ml-16">
          {/* Clean chrome finish Heading */}
         <h1 className="text-4xl sm:text-7xl font-extrabold py-8 inline-block">
            <span className="bg-gradient-to-b from-neutral-100 via-neutral-400 to-neutral-700 bg-clip-text text-transparent [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] filter drop-shadow-[0_5px_15px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_8px_20px_rgba(255,255,255,0.3)] transition-all duration-300">
              About Me
            </span>
            <span className="text-neutral-400">.</span>
          </h1>

          {/* Paragraphs */}
          <p className="text-lg leading-relaxed mb-4">
            I'm <strong>TejaRaju Eeta</strong>, a passionate <strong>Full Stack Developer</strong> who loves building modern, responsive, and user-friendly web applications. I enjoy turning ideas into functional digital experiences using clean design and efficient code.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            My technical stack includes <strong>HTML, CSS, Tailwind, Bootstrap, JavaScript, React, Python, Flask, and MySQL</strong>. I focus on creating seamless user interfaces while maintaining strong, scalable backend systems.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            One of my recent projects is an <strong>Amazon Clone</strong>, built using React for the frontend and Flask with MySQL for the backend — showcasing my ability to handle both client-side and server-side logic.
          </p>
          <p className="text-lg leading-relaxed">
            I'm constantly exploring new technologies and improving my problem-solving skills. My goal is to grow as a developer, contribute to impactful projects, and build innovative web solutions that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
