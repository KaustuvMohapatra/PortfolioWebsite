"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <div className="p-4 h-full overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/150?text=Photo";
                }}
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">John Doe</h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-4">Full Stack Developer</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Passionate developer with expertise in creating beautiful and functional web applications.
              I specialize in React, Node.js, and modern frontend frameworks.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">About Me</h3>
          <p className="mb-3">
            I'm a highly motivated software developer with over 5 years of experience building
            web applications. I enjoy solving complex problems and creating intuitive user experiences.
          </p>
          <p>
            When I'm not coding, you can find me hiking, reading science fiction, or experimenting
            with new technologies. I'm always open to learning new skills and taking on challenging projects.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Education</h3>
          <div className="space-y-3">
            <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">
              <div className="flex justify-between">
                <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                <span className="text-sm text-gray-500">2015-2019</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">University of Technology</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">
              <div className="flex justify-between">
                <h4 className="font-medium">Web Development Bootcamp</h4>
                <span className="text-sm text-gray-500">2020</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Coding Academy</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {["Web Development", "UI/UX Design", "Mobile Apps", "AI", "Open Source", "Tech Gadgets"].map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
