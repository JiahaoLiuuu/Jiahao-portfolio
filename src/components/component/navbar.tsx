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

  return (
    <>
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
    </>
  );
}
