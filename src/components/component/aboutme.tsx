"use client";

import Link from "next/link";
import React, {
  useEffect,
  useRef,
  RefObject,
  useState,
  useCallback,
} from "react";
import "../../styles/utilities.css";
import Image from "next/image";
import aboutImgSrc from "../../../public/Image_20240723013747.jpg";

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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I am a software developer with a passion for creating innovative
            applications. With several years of experience in the industry, I
            have honed my skills in a variety of programming languages and
            frameworks, and I am always eager to learn new technologies.
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
              className="inline-flex h-10 items-center justify-center rounded-md border-gray-200 bg-slate-100 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-400 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
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
