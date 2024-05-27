"use client";

import React from "react";
import "../../styles/utilities.css";
import { CardContent, Card } from "@/components/ui/card";
import { Database, Code, Library, Drill } from "lucide-react";

export default function Skills() {

  return (
    <>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Skills
                </h2>
                <p className="max-w-[1500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  These are the top skills I have developed as a software
                  developer through my academic and professional experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12 justify-center max-w-screen-xl">
              <Card className="scalable">
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <Code />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Languages</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Proficient in C++, C#, JavaScript, COBOL, HTML/CSS,
                      VB.NET, Rust and so on
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="scalable">
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <Library />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Libraries</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Experienced using Tailwind, Bootstrap, React, Next.js,
                      Shadcn UI, QT, and popular liabraries and frameworks
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="scalable">
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <Database />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Database Management</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Knowledgeable in designing and implementing relational and
                      NoSQL databases, including MySQL, PostgreSQL, and MongoDB,
                      and Pervasive PSQL.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="scalable">
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <Drill />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Other</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Familiar with version control tools, including git and
                      svn. Experience in using AWS, TestArchitect, Windows Form
                      development, and so on......
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
    </>
  );
}
