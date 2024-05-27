"use client";

import Link from "next/link";
import React, {
  useState,
} from "react";
import circleImgSrc from "../../../public/cropped_image.png";
import "../../styles/utilities.css";
import Image from "next/image";
import { Linkedin, Github, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export default function ContactMe() {
  
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
  return (
    <>
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
    </>
  );
}
