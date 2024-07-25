"use client";

import React, { useEffect, useRef, useState } from "react";
import "../../styles/utilities.css";
import NavBar from "./navbar";
import AboutMe from "./aboutme";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import ContactMe from "./contactme";

export function Component() {

  return (
    <>
      <NavBar />
      <main className="pt-20">
        <section className="py-4 md:py-8 lg:py-12" id="about">
          <AboutMe />
        </section>
        <section
          className="py-12 md:py-16 lg:py-20 lg:px-20 bg-gray-100 dark:bg-gray-800"
          id="experience"
        >
          <Experience />
        </section>{" "}
        <section className="py-10 md:py-20 lg:py-24  " id="skills">
          <Skills />
        </section>
        <section
          className="py-10 md:py-20 lg:py-24 bg-gray-100 dark:bg-gray-800"
          id="projects"
        >
            <Projects />
        </section>
        <section className="py-12 md:py-24 lg:py-32 " id="contact">
            <ContactMe />
        </section>
      </main>
      <footer>
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 by Jiahao Liu
          </p>
        </div>
      </footer>
    </>
  );
}
