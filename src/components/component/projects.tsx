"use client";

import Link from "next/link";
import React from "react";
import "../../styles/utilities.css";
import Image from "next/image";
import imageSrc from "../../../public/elephant.jpg";
import prj1ImgSrc2 from "../../../public/prtfloScreenshot2.png";

export default function Projects() {

  return (
    <>
          <div className="container mx-auto grid flex-col text-centeritems-center gap-6 px-4 md:px-6">
            <div className="space-y-4 text-center sm:text-left">
              <h2 className="text-3xl font-bold  tracking-tighter sm:text-4xl md:text-5xl">
                My Projects
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify sm:text-left">
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
    </>
  );
}
