"use client";

import Link from "next/link";
import React, { useState } from "react";
import circleImgSrc from "../../../public/cropped_image.png";
import "../../styles/utilities.css";
import Image from "next/image";
import WechatIDSrc from "../../../public/wechatID.jpg";
import { Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeixin } from "@fortawesome/free-brands-svg-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type SubmitStatus = 'success' | 'error' | null;

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl mx-auto mt-4">
            I am always excited to connect with new people and discuss potential collaborations. Feel free to reach out!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="contact-card bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-100 dark:bg-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-100 dark:bg-gray-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-100 dark:bg-gray-700"
                  rows={4}
                />
              </div>
              <Button 
                className="w-full gradient-bg text-white transform transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
              </Button>
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6">
          <Image
            alt="Jiahao Liu"
            className="rounded-full transition-transform duration-300 hover:scale-105"
            height={200}
            src={circleImgSrc}
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width={200}
          />
            <div className="text-center">
              <h3 className="text-2xl font-semibold">Jiahao Liu</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Software Developer</p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                className="social-icon text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                href="https://github.com/JiahaoLiuuu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-8 w-8" />
              </Link>
              <Link
                className="social-icon text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                href="https://www.linkedin.com/in/jliukyle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-8 w-8" />
              </Link>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="social-icon text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                    <FontAwesomeIcon icon={faWeixin} className="h-8 w-8" />
                  </button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <Image
                      alt="Wechat ID"
                      src={WechatIDSrc}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
