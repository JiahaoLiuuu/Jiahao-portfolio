"use client";
import Link from "next/link";
import React, { useEffect, useRef, RefObject, useState, useCallback } from "react";
import "../../styles/utilities.css";
// 删除 Image 引用
// import Image from "next/image"; 
// import aboutImgSrc from "../../../public/Image_20240723013747.jpg"; 
import "../ui/neonText.css";
import { Sparkles, Terminal } from "lucide-react"; // 换个更极客的图标

export default function AboutMe() {
  const contactRef = useRef<HTMLElement | null>(null);

  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    ref: RefObject<HTMLElement>
  ) => {
    event.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactRef.current = contactSection;
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="border-4 border-black dark:border-white p-6 md:p-12 shadow-pixel bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-pixel-header">
            <span className="retro-flow ml-2">JIAHAO LIU</span>
          </h2>
          
          <div className="text-xl md:text-2xl font-pixel-body max-w-3xl leading-relaxed">

            <br/>
            <p>
              I am a <span className="retro-flow font-bold mx-2">Software Developer</span>aiming to build 
              innovative applications. Equipped with full-stack skills and ready to tackle new challenges.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              className="font-pixel-header text-sm flex h-12 items-center justify-center border-2 border-black bg-blue-500 text-white shadow-pixel transition-transform hover:translate-y-1 hover:shadow-none hover:translate-x-1 px-8"
              href="/JiahaoLiu-Resume.pdf"
              target="_blank"
            >
              <Terminal className="w-4 h-4 mr-2" />
              DOWNLOAD RESUME
            </Link>
            <Link
              className="font-pixel-header text-sm flex h-12 items-center justify-center border-2 border-black bg-white text-black shadow-pixel transition-transform hover:translate-y-1 hover:shadow-none hover:translate-x-1 px-8 hover:bg-gray-100"
              href="#"
              onClick={(e) => handleScrollToSection(e, contactRef)}
            >
              CONNECT ME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
