"use client";

import Link from "next/link";
import React from "react";
import "../../styles/utilities.css";
import Image from "next/image";
import imageSrc from "../../../public/elephant.jpg";
import prj1ImgSrc2 from "../../../public/prtfloScreenshot3.png";
import prj2ImgSrc from "../../../public/flowchart.png"
import { Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Personal Portfolio",
    description: "Developed with Next.js and Shadcn/ui, deployed on Vercel.",
    image: prj1ImgSrc2,
    link: "https://github.com/JiahaoLiuuu/Jiahao-portfolio#",
  },
  {
    title: "AI Trading Agent",
    description: "A machine learing AI trading agent, implemented with decision trees, q-learning, regression, and so on.",
    image: prj2ImgSrc,
    link: "https://github.com/JiahaoLiuuu/Mechine-Learning-for-Trading.git",
  },
  {
    title: "Project 3",
    description: "This is a description placeholder for project 3.",
    image: imageSrc,
    link: "#",
  },
];

export default function Projects() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl mx-auto">
            I have worked on a variety of projects. Here are a few examples of my work:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card relative overflow-hidden rounded-xl shadow-lg">
              <Image
                alt={project.title}
                className="object-cover w-full h-60"
                height={300}
                src={project.image}
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="bg-white dark:bg-gray-800 p-6">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
              <div className="project-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black dark:bg-gray-800 dark:text-white py-2 px-4 rounded-full flex items-center hover:bg-opacity-90 transition-all duration-300"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}