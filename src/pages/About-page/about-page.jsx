import React from "react";
import { useEffect } from "react";

import { AboutMe, Skills, Formation, Languages } from "../../components";
export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="about-page">
        <AboutMe />
        <Languages />
        <Formation />
        <Skills />
        <div className="blue-line"></div>
      </main>
    </>
  );
}
