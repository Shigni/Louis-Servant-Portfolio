import React from "react";

import { AboutMe, Skills, Formation } from "../../components";
export function AboutPage() {
  return (
    <>
      <main className="about-page">
        <div className="aside">
          <AboutMe />
          <Formation />
        </div>
        <Skills />
      </main>
    </>
  );
}
