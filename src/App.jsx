import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import EnterScreen from './components/EnterScreen';
import Footer from './components/Footer';
import Skills from './components/Skills';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';  // Updated import

function App() {
  const [started, setStarted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    // Initialize EmailJS once at app start with your public key
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

    const isBot = /bot|crawl|spider|slurp|bing/i.test(navigator.userAgent);
    const isHome = window.location.pathname === '/';
    const alreadyVisited = sessionStorage.getItem('alreadyVisited');

    if (isBot) {
      setStarted(true);
    } else if (isHome && !alreadyVisited) {
      setStarted(false);
    } else {
      setStarted(true);
    }
    setInitialCheckDone(true);
  }, []);

  const handleStart = () => {
    sessionStorage.setItem('alreadyVisited', 'true');
    setStarted(true);
    setShowLoader(true);
  };

  if (!initialCheckDone) return null;

  return (
    <>
      {/* Global SEO Metadata */}
      <Helmet>
        <title>TejaRaju Eeta | Full Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Official portfolio of TejaRaju Eeta, a full stack developer skilled in React, Node.js, and passionate about AI/ML. Explore projects, skills, and experience." />
        <link rel="canonical" href="https://chaitanya-sai-meka.vercel.app/" />

        <meta property="og:title" content="Chaitanya Sai Meka | Full Stack Developer" />
        <meta property="og:description" content="Official portfolio of TejaRaju-Eeta, a full stack developer skilled in React, Node.js, and passionate about AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://TejaRaju-Eeta.vercel.app/" />
        <meta property="og:image" content="https://TejaRaju-Eeta.vercel.app/profile_pic.png" />
        <meta property="og:site_name" content="TejaRaju Eeta Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@TejaRaju Eeta" />
        <meta name="twitter:title" content="TejaRaju Eeta | Full Stack Developer" />
        <meta name="twitter:description" content="Official portfolio of TejaRaju-Eeta, a full stack developer skilled in React, Node.js, and passionate about AI/ML." />
        <meta name="twitter:image" content="https://TejaRaju Eeta.vercel.app/profile_pic.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "TejaRaju-Eeta",
              "url": "https://chaitanya-sai-meka.vercel.app/",
              "sameAs": [
                "https://github.com/ChaitanyaSai-Meka",
                "https://www.instagram.com/chaitanyasai_meka/",
                "https://www.linkedin.com/in/chaitanya-sai-meka/",
                "https://leetcode.com/u/chaitanyasai_meka/",
                "https://codeforces.com/profile/Chaitanyasai_meka"
              ],
              "jobTitle": "Freelancer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self-Employed"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Bonam Venkata Chalamayya Institute of Technology & Science"
              },
              "image": "https://TejaRaju-Eeta.vercel.app/profile_pic.png",
              "description": "TejaRaju-Eeta is a passionate full-stack developer specializing in React and modern web technologies, with expertise in AI, based in Amalapuram, Andhra Pradesh, India."
            }
          `}
        </script>
      </Helmet>

      {/* UI Flow */}
      {!started ? (
        <EnterScreen onEnter={handleStart} />
      ) : showLoader ? (
        <Loader onComplete={() => setShowLoader(false)} />
      ) : (
        <Router>
          <div className="bg-white dark:bg-black">
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
            <Footer />
            <SpeedInsights />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
