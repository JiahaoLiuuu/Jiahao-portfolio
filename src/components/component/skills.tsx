"use client";
import React from "react";
import "../../styles/utilities.css";
import { CardContent, Card } from "@/components/ui/card";
import { Database, Code, Library, Wrench } from "lucide-react";

const skillsData = [
  {
    icon: <Code className="w-12 h-12 text-blue-500" />,
    title: "Languages",
    description: "Proficient in C++, C#, JavaScript, COBOL, HTML/CSS, VB.NET, Rust and more",
  },
  {
    icon: <Library className="w-12 h-12 text-purple-500" />,
    title: "Libraries & Frameworks",
    description: "Experienced with Tailwind, Bootstrap, React, Next.js, Shadcn UI, QT, and other popular libraries",
  },
  {
    icon: <Database className="w-12 h-12 text-green-500" />,
    title: "Database Management",
    description: "Skilled in designing and implementing relational and NoSQL databases, including MySQL, PostgreSQL, MongoDB, and Pervasive PSQL",
  },
  {
    icon: <Wrench className="w-12 h-12 text-orange-500" />,
    title: "Tools & Technologies",
    description: "Proficient with version control (git, svn), AWS, TestArchitect, Windows Form development, and more",
  },
];


export default function Skills() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl mx-auto">
              These are the top skills I have developed as a software developer through my academic and professional experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <Card key={index} className="skill-card overflow-hidden">
              <div className="h-2 gradient-bg"></div>
              <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                {skill.icon}
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}