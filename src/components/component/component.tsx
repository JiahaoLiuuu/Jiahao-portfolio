"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Github, Database, Code, Library, Drill } from "lucide-react";
import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";
import imageSrc from "../../../public/elephant.jpg";
import circleImgSrc from "../../../public/cropped_image.png";
import prj1ImgSrc2 from "../../../public/prtfloScreenshot2.png";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import "../../styles/utilities.css";
import NavBar from "./navbar";
import AboutMe from "./aboutme";

export function Component() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const expRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const aboutSection = document.getElementById("about");
    const expSection = document.getElementById("experience");
    const skillsSection = document.getElementById("skills");
    const projectsSection = document.getElementById("projects");
    const contactSection = document.getElementById("contact");

    if (aboutSection) aboutRef.current = aboutSection;
    if (expSection) expRef.current = expSection;
    if (skillsSection) skillsRef.current = skillsSection;
    if (projectsSection) projectsRef.current = projectsSection;
    if (contactSection) contactRef.current = contactSection;
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full  px-4 py-3 bg-slate-100 opacity-75 dark:bg-zinc-900">
        <NavBar />
      </header>
      <main className="pt-20">
        <section className="py-4 md:py-8 lg:py-12" id="about">
          <AboutMe />
        </section>
        <section
          className="py-12 md:py-16 lg:py-20 lg:px-20 bg-gray-100 dark:bg-gray-800"
          id="experience"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Professional Experience
              </h2>
              <div className="grid gap-6">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">
                        Global Shop Solutions
                      </h3>
                      <div className="rounded-full bg-gray-100 px-5 py-1 text-sm font-medium dark:bg-gray-800">
                        {" "}
                        2020.6 - Current{" "}
                      </div>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      ERP Software Developer
                    </div>
                    <p className="text-sm/relaxed">
                      I joined the Software Modernization team as a software
                      developer at Global Shop Solutions right after I graduate
                      in 2020.5.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>
                        Convert legacy programs written in COBOL into
                        VB.NET-compatible languages and frameworks
                      </li>
                      <li>
                        Analyze code and resolve issues in legacy programs
                        during conversion, including refactoring code, rewriting
                        logic, and ensuring compatibility with new
                        implementations
                      </li>
                      <li>
                        Create and maintain tools to assist the conversion
                        process
                      </li>
                      <li>
                        Participate in data setup and testing of converted
                        programs, ensuring quality and functionality, and report
                        results to the scrum master, and create comprehensive QA
                        documentation if needed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        <section className="py-10 md:py-20 lg:py-24  " id="skills">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Skills
                </h2>
                <p className="max-w-[1500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  These are the top skills I have developed as a software
                  developer through my academic and professional experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12 justify-center max-w-screen-xl">
              <Card className="scalable">
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <Code />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Languages</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Proficient in C++, C#, JavaScript, COBOL, HTML/CSS,
                      VB.NET, Rust and so on
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="scalable">
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <Library />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Libraries</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Experienced using Tailwind, Bootstrap, React, Next.js,
                      Shadcn UI, QT, and popular liabraries and frameworks
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="scalable">
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <Database />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Database Management</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Knowledgeable in designing and implementing relational and
                      NoSQL databases, including MySQL, PostgreSQL, and MongoDB,
                      and Pervasive PSQL.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="scalable">
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <Drill />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Other</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Familiar with version control tools, including git and
                      svn. Experience in using AWS, TestArchitect, Windows Form
                      development, and so on......
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          className="py-10 md:py-20 lg:py-24 bg-gray-100 dark:bg-gray-800"
          id="projects"
        >
          <div className="container mx-auto grid flex-col text-centeritems-center gap-6 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold  tracking-tighter sm:text-4xl md:text-5xl">
                My Projects
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I have worked on a variety of projects. Here are a few examples
                of my work:
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative group overflow-hidden rounded-lg scalable">
                <Link
                  className="absolute inset-0 z-10"
                  href="https://github.com/JiahaoLiuuu/Jiahao-portfolio#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">View</span>
                </Link>
                <Image
                  alt="Project 1"
                  className="object-cover w-full h-60"
                  height={300}
                  src={prj1ImgSrc2}
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-semibold text-lg md:text-xl">
                    Personal Portfolio
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Developed with Next.js and Shadcn/ui, deployed on Vercel .
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg scalable">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <Image
                  alt="Project 2"
                  className="object-cover w-full h-60"
                  height={300}
                  src={imageSrc}
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-semibold text-lg md:text-xl">Project2</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is a description placeholder for project2.
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg scalable">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <Image
                  alt="Project 3"
                  className="object-cover w-full h-60"
                  height={300}
                  src={imageSrc}
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-semibold text-lg md:text-xl">Project3</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is a description placeholder for project3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 " id="contact">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am always excited to connect with new people and discuss
                potential collaborations. Feel free to reach out to me using the
                form below, and I will get back to you as soon as possible.
              </p>
              <form className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" required type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required />
                </div>
                <Button className="w-full" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <Image
                alt="Jiahao Liu"
                className="rounded-full transition-transform duration-700"
                height={200}
                src={circleImgSrc}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
                width={200}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              <div className="text-center">
                <h3 className="text-2xl font-semibold">Jiahao Liu</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Software Developer
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="https://github.com/JiahaoLiuuu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </Link>
                <Link
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="https://www.linkedin.com/in/jliukyle/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Jiahao Liu
          </p>
        </div>
      </footer>
    </>
  );
}
