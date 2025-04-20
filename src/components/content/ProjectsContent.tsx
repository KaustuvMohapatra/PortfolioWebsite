"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB.",
    image: "https://via.placeholder.com/400x250?text=E-Commerce+Project",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "A web application that uses AI to generate images from text descriptions.",
    image: "https://via.placeholder.com/400x250?text=AI+Image+Generator",
    tags: ["React", "OpenAI API", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects with team collaboration features.",
    image: "https://via.placeholder.com/400x250?text=Task+Management+App",
    tags: ["Vue.js", "Firebase", "Vuex"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A real-time weather dashboard with forecasting and location search.",
    image: "https://via.placeholder.com/400x250?text=Weather+Dashboard",
    tags: ["JavaScript", "Weather API", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "A mobile-responsive fitness tracking application with workout plans and progress charts.",
    image: "https://via.placeholder.com/400x250?text=Fitness+Tracker",
    tags: ["React Native", "Firebase", "Redux"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

type ProjectCardProps = {
  project: typeof projects[0];
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-white text-xl font-bold">{project.title}</h3>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Github className="w-4 h-4 mr-1" />
            <span className="text-sm">Source Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <span className="text-sm">Live Demo</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsContent() {
  return (
    <div className="p-4 h-full overflow-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-6">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
