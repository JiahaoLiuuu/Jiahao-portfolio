"use client";
import React from "react";
import "../../styles/utilities.css";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";


export default function Experience() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="grid gap-8">
            <div className="experience-card rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                    <Briefcase className="mr-2 h-6 w-6 text-blue-500" />
                    Global Shop Solutions
                  </h3>
                  <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200 flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    2020.6 - Current
                  </div>
                </div>
                <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                  ERP Software Developer
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  I joined the Software Modernization team as a software developer at Global Shop Solutions right after I graduated in 2020.5.
                </p>
                <ul className="space-y-3 mt-4">
                  {[
                    "Convert legacy programs written in COBOL into VB.NET-compatible languages and frameworks",
                    "Analyze code and resolve issues in legacy programs during conversion, including refactoring code, rewriting logic, and ensuring compatibility with new implementations",
                    "Create and maintain tools to assist the conversion process",
                    "Participate in data setup and testing of converted programs, ensuring quality and functionality, and report results to the scrum master, and create comprehensive QA documentation if needed"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}