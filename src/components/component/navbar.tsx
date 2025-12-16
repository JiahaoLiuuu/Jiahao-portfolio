"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { ModeToggle } from "./theme-toggle";
import { BugOff, Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import "../../styles/utilities.css";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("about");

  const sheetContentRef = useRef<HTMLDivElement>(null);

  const sections = ['about', 'experience', 'skills', 'projects', 'contact'];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll to section
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -80; // Adjust this value based on your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setActiveSection(section);
    setIsSheetOpen(false);
  };

  // Handle sheet open/close
  const handleSheetOpenChange = (open: boolean) => {
    setIsSheetOpen(open);
  };

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Handle active section on scroll
  useEffect(() => {
    const handleSectionVisibility = () => {
      const sectionElements = sections.map(section => ({
        id: section,
        element: document.getElementById(section),
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleSectionVisibility);
    return () => window.removeEventListener('scroll', handleSectionVisibility);
  }, [sections]);

  if (!mounted) {
    return null;
  }

  const isDarkMode = theme === "dark";

  return (
      <header
        className={`fixed top-0 left-0 z-50 w-full px-4 py-3 transition-colors duration-300
          ${isDarkMode 
            ? 'bg-gray-900 border-b-4 border-white' 
            : 'bg-white border-b-4 border-black'
          }
          ${visible || window.innerWidth > 768 ? "" : "transform -translate-y-full"}
          nav-transition font-pixel-header`} // 加上字体 class
      >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          className="flex items-center gap-2 font-bold text-xl scalable"
          href="#"
          onClick={(e) => handleScrollToSection(e, 'about')}
        >
          <BugOff className={isDarkMode ? "text-blue-400" : "text-blue-500"} />
          <span className="retro-flow">Jiahao Liu</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {sections.map((section) => (
            <Link
              key={section}
              className={`nav-link text-base font-medium transition-colors
                ${activeSection === section
                  ? (isDarkMode ? "text-blue-400" : "text-blue-500")
                  : (isDarkMode 
                      ? "text-gray-300 hover:text-blue-400" 
                      : "text-gray-600 hover:text-blue-500")
                }`}
              href={`#${section}`}
              onClick={(e) => handleScrollToSection(e, section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          <ModeToggle />
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <ModeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                {isSheetOpen ? <X /> : <Menu />}
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              ref={sheetContentRef} 
              className={`w-[300px] sm:w-[400px] ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
            >
              <div className="grid gap-6 py-6">
                {sections.map((section) => (
                  <Link
                    key={section}
                    className={`flex w-full items-center py-2 text-lg font-semibold transition-colors
                      ${activeSection === section
                        ? (isDarkMode ? "text-blue-400" : "text-blue-500")
                        : (isDarkMode 
                            ? "text-gray-300 hover:text-blue-400" 
                            : "text-gray-700 hover:text-blue-500")
                      }`}
                    href={`#${section}`}
                    onClick={(e) => handleScrollToSection(e, section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
