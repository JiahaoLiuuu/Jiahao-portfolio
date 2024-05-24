"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ModeToggle } from "./theme-toggle";
import { BugOff, Menu, Linkedin, Github, Twitter } from "lucide-react";
import Image from "next/image";
import imageSrc from "../../../public/elephant.jpg"
import { useEffect, useRef, RefObject, useState } from 'react';

export function Component() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleScrollToSection = (event: React.MouseEvent<HTMLAnchorElement>,ref: RefObject<HTMLElement>) => {
    event.preventDefault();
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsSheetOpen(false);
  };

  useEffect(() => {
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');

    if (aboutSection) aboutRef.current = aboutSection;
    if (skillsSection) skillsRef.current = skillsSection;
    if (projectsSection) projectsRef.current = projectsSection;
    if (contactSection) contactRef.current = contactSection;
  }, []);
  
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full  px-4 py-3 backdrop-blur-md ">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center gap-2 font-semibold" 
              href="#"
              onClick={(e) => handleScrollToSection(e, aboutRef)}
          >
            <BugOff />
            <span className="text-lg">Jiahao Liu</span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
              onClick={(e) => handleScrollToSection(e, aboutRef)}
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
              onClick={(e) => handleScrollToSection(e, skillsRef)}
            >
              Skills
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
              onClick={(e) => handleScrollToSection(e, projectsRef)}
            >
              Projects
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
              onClick={(e) => handleScrollToSection(e, contactRef)}
            >
              Contact
            </Link>
            <ModeToggle />
          </nav>
          <Sheet open={isSheetOpen}>
            <SheetTrigger asChild onClick={() => setIsSheetOpen(!isSheetOpen)}>
              <Button className="lg:hidden" size="icon" variant="outline">
                <Menu />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 py-6">
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  href="#"
                  onClick={(e) => handleScrollToSection(e, aboutRef)}
                >
                  About
                </Link>
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  href="#"
                  onClick={(e) => handleScrollToSection(e, skillsRef)}
                  >
                  Skills
                </Link>
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  href="#"
                  onClick={(e) => handleScrollToSection(e, projectsRef)}
                  >
                  Projects
                </Link>
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  href="#"
                  onClick={(e) => handleScrollToSection(e, contactRef)}
                  >
                  Contact
                </Link>
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="pt-20">
        <section className="py-4 md:py-8 lg:py-12" id="about">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am a software developer with a passion for creating innovative
                applications. With several years of experience
                in the industry, I have honed my skills in a variety of
                programming languages and frameworks, and Iam always eager to
                learn new technologies.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-slate-500 dark:focus-visible:ring-gray-300"
                  href="/JiahaoLiu-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Resume
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                  onClick={(e) => handleScrollToSection(e, contactRef)}
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <Image
              src={imageSrc}
              alt="About"
              className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section
          className="py-6 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 "
          id="skills"
        >
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <Image
              alt="Skills"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src={imageSrc}
              width="550"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Skills
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I have a diverse set of skills that I have developed over the
                years, including proficiency in various programming languages,
                frameworks, and tools. I am always eager to learn and expand my
                knowledge.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
                  <h3 className="text-lg font-semibold">Languages</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                    <li>C++</li>
                    <li>JavaScript</li>
                    <li>C#</li>
                    <li>cobol</li>
                    <li>HTML/CSS</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
                  <h3 className="text-lg font-semibold">Framworks</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
                  <h3 className="text-lg font-semibold">Databases</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Pervasive PSQL</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
                  <h3 className="text-lg font-semibold">Tools</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                    <li>Git</li>
                    <li>SVN</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32" id="projects">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Projects
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I have worked on a variety of projects.
                Here are a few examples of my work:
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative group overflow-hidden rounded-lg">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <Image
                  alt="Project 1"
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
                  <h3 className="font-semibold text-lg md:text-xl">
                    Project1
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description.
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
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
                  <h3 className="font-semibold text-lg md:text-xl">
                  Project2
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description.
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
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
                  <h3 className="font-semibold text-lg md:text-xl">
                  Project3
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          id="contact"
        >
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
                alt="John Doe"
                className="rounded-full"
                height={200}
                src={imageSrc}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={200}
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
                  href="#"
                >
                  <Github />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="https://www.linkedin.com/in/jliukyle/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                  <span className="sr-only">LinkedIn</span>
                </Link>

              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-6 dark:bg-gray-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Jiahao Liu.
          </p>
        </div>
      </footer>
    </>
  );
}
