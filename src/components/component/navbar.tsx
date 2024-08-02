"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { ModeToggle } from "./theme-toggle";
import { BugOff, Menu, X } from "lucide-react";
import React, { useEffect, useRef, RefObject, useState, useCallback } from "react";
import "../../styles/utilities.css";

export default function NavBar() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const expRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const sheetContentRef = useRef<HTMLDivElement>(null);

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
    const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        switch(section) {
          case 'about': aboutRef.current = element; break;
          case 'experience': expRef.current = element; break;
          case 'skills': skillsRef.current = element; break;
          case 'projects': projectsRef.current = element; break;
          case 'contact': contactRef.current = element; break;
        }
      }
    });
  }, []);

  useEffect(() => {
    const handlePointerDownOutside = (event: MouseEvent) => {
      if (sheetContentRef.current && !sheetContentRef.current.contains(event.target as Node)) {
        setIsSheetOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDownOutside);
    return () => document.removeEventListener("pointerdown", handlePointerDownOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (window.innerWidth <= 768) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full px-4 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 ${
          visible || window.innerWidth > 768 ? "" : "transform -translate-y-full"
        } nav-transition`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link
            className="flex items-center gap-2 font-bold text-xl scalable"
            href="#"
            onClick={(e) => handleScrollToSection(e, aboutRef)}
          >
            <BugOff className="text-blue-500" />
            <span className="logo-text">Jiahao Liu</span>
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {[
              { name: "About", ref: aboutRef },
              { name: "Experience", ref: expRef },
              { name: "Skills", ref: skillsRef },
              { name: "Projects", ref: projectsRef },
              { name: "Contact", ref: contactRef },
            ].map((item) => (
              <Link
                key={item.name}
                className="nav-link text-base font-medium text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                href="#"
                onClick={(e) => handleScrollToSection(e, item.ref)}
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <ModeToggle />
            <Sheet open={isSheetOpen} onOpenChange={handleSheetOpenChange}>
              <SheetTrigger asChild onClick={() => setIsSheetOpen(!isSheetOpen)}>
                <Button size="icon" variant="outline">
                  {isSheetOpen ? <X /> : <Menu />}
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" ref={sheetContentRef} className="w-[300px] sm:w-[400px]">
                <div className="grid gap-6 py-6">
                  {[
                    { name: "About", ref: aboutRef },
                    { name: "Experience", ref: expRef },
                    { name: "Skills", ref: skillsRef },
                    { name: "Projects", ref: projectsRef },
                    { name: "Contact", ref: contactRef },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      className="flex w-full items-center py-2 text-lg font-semibold text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      href="#"
                      onClick={(e) => handleScrollToSection(e, item.ref)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}