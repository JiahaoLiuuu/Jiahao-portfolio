"use client";

import React from "react";

import "../../styles/utilities.css";

export default function Experience() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center sm:text-left">
            Professional Experience
          </h2>

          <div className="grid gap-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between">
                  <h3 className="text-xl font-bold  mr-2">Global Shop Solutions</h3>
                  <div className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800 whitespace-nowrap">
                    {" "}
                    2020.6 - Current{" "}
                  </div>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  ERP Software Developer
                </div>
                <p className="text-sm/relaxed">
                  I joined the Software Modernization team as a software
                  developer at Global Shop Solutions right after I graduate in
                  2020.5.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    Convert legacy programs written in COBOL into
                    VB.NET-compatible languages and frameworks
                  </li>
                  <li>
                    Analyze code and resolve issues in legacy programs during
                    conversion, including refactoring code, rewriting logic, and
                    ensuring compatibility with new implementations
                  </li>
                  <li>
                    Create and maintain tools to assist the conversion process
                  </li>
                  <li>
                    Participate in data setup and testing of converted programs,
                    ensuring quality and functionality, and report results to
                    the scrum master, and create comprehensive QA documentation
                    if needed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
