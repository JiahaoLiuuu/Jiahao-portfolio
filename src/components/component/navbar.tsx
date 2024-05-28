"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { ModeToggle } from "./theme-toggle";
import { BugOff, Menu } from "lucide-react";
import React, {
  useEffect,
  useRef,
  RefObject,
  useState,
  useCallback,
} from "react";
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

  useEffect(() => {
    const handlePointerDownOutside = (event: MouseEvent) => {
      if (
        sheetContentRef.current &&
        !sheetContentRef.current.contains(event.target as Node)
      ) {
        setIsSheetOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDownOutside);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDownOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Only hide the navigation bar on small screens
      if (window.innerWidth <= 768) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Add this line to handle window resize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll); // Add this line to remove the resize event listener
    };
  }, [prevScrollPos, visible]);

  return (
    <>
      <header
        className={` fixed top-0 left-0 z-50 w-full px-4 py-3 bg-slate-100 opacity-75 dark:bg-zinc-900 border-b border-gray-300 dark:border-gray-600  ${
          visible || window.innerWidth > 768 ? "" : "transform -translate-y-full"
        } nav-transition`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link
            className="flex items-center gap-2 font-semibold scalable"
            href="#"
            onClick={(e) => handleScrollToSection(e, aboutRef)}
          >
            <BugOff />
            <span className="text-lg">Jiahao Liu</span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link
              className="text-lg font-medium hover:underline underline-offset-4 scalable"
              href="#"
              onClick={(e) => handleScrollToSection(e, aboutRef)}
            >
              About
            </Link>
            <Link
              className="text-lg font-medium hover:underline underline-offset-4 scalable"
              href="#"
              onClick={(e) => handleScrollToSection(e, expRef)}
            >
              Experience
            </Link>
            <Link
              className="text-lg font-medium hover:underline underline-offset-4 scalable"
              href="#"
              onClick={(e) => handleScrollToSection(e, skillsRef)}
            >
              Skills
            </Link>
            <Link
              className="text-lg font-medium hover:underline underline-offset-4 scalable"
              href="#"
              onClick={(e) => handleScrollToSection(e, projectsRef)}
            >
              Projects
            </Link>
            <Link
              className="text-lg font-medium hover:underline underline-offset-4 scalable"
              href="#"
              onClick={(e) => handleScrollToSection(e, contactRef)}
            >
              Contact
            </Link>
            <ModeToggle />
          </nav>
          <Sheet open={isSheetOpen} onOpenChange={handleSheetOpenChange}>
            <SheetTrigger asChild onClick={() => setIsSheetOpen(!isSheetOpen)}>
              <Button className="lg:hidden" size="icon" variant="outline">
                <Menu />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" ref={sheetContentRef}>
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
                  onClick={(e) => handleScrollToSection(e, expRef)}
                >
                  Experience
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
    </>
  );
}