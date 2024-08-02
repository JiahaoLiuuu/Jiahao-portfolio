"use client";
import Link from "next/link";
import React, { useEffect, useRef, RefObject, useState, useCallback } from "react";
import "../../styles/utilities.css";
import Image from "next/image";
import aboutImgSrc from "../../../public/Image_20240723013747.jpg";
import "../ui/neonText.css";
import { Sparkles } from "lucide-react";

export default function AboutMe() {
  const contactRef = useRef<HTMLElement | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    ref: RefObject<HTMLElement>
  ) => {
    event.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsSheetOpen(false);
  };

  const handleSheetOpenChange = useCallback(
    (open: boolean) => {
      setIsSheetOpen(open);
    },
    [setIsSheetOpen]
  );

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactRef.current = contactSection;
  }, []);

  return (
    <>
      <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center sm:text-left">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-relaxed sm:leading-relaxed text-justify sm:text-left">
            I am a <span className="font-bold neonText">software developer</span> with a passion for creating innovative
            applications. With several years of experience in the industry, I
            have honed my skills in a variety of programming languages and
            frameworks, and I am always eager to learn new technologies.
          </p>
          <div className="flex flex-col items-center sm:items-start gap-4 sm:flex-row">
            <Link
              className="bounce-on-hover w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              href="/JiahaoLiu-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              My Resume
            </Link>
            <Link
              className="bounce-on-hover w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border-2 border-gray-300 bg-transparent px-8 text-sm font-medium text-gray-700 shadow-md transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              href="#"
              onClick={(e) => handleScrollToSection(e, contactRef)}
            >
              Contact Me
            </Link>
          </div>
        </div>
        <Image
          src={aboutImgSrc}
          alt="About"
          className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full"
        />
      </div>
    </>
  );
}