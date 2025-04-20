"use client";

import React from "react";
import { motion } from "framer-motion";

type SkillCategory = {
  name: string;
  skills: {
    name: string;
    level: number; // 1-5
    icon?: string;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 5, icon: "/icons/skills/react.png" },
      { name: "Vue.js", level: 4, icon: "/icons/skills/vue.png" },
      { name: "JavaScript", level: 5, icon: "/icons/skills/javascript.png" },
      { name: "TypeScript", level: 4, icon: "/icons/skills/typescript.png" },
      { name: "HTML/CSS", level: 5, icon: "/icons/skills/html-css.png" },
      { name: "Tailwind CSS", level: 4, icon: "/icons/skills/tailwind.png" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4, icon: "/icons/skills/nodejs.png" },
      { name: "Express", level: 4, icon: "/icons/skills/express.png" },
      { name: "Python", level: 3, icon: "/icons/skills/python.png" },
      { name: "Django", level: 3, icon: "/icons/skills/django.png" },
      { name: "GraphQL", level: 3, icon: "/icons/skills/graphql.png" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", level: 4, icon: "/icons/skills/mongodb.png" },
      { name: "PostgreSQL", level: 3, icon: "/icons/skills/postgresql.png" },
      { name: "MySQL", level: 3, icon: "/icons/skills/mysql.png" },
      { name: "Firebase", level: 4, icon: "/icons/skills/firebase.png" },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", level: 5, icon: "/icons/skills/git.png" },
      { name: "Docker", level: 3, icon: "/icons/skills/docker.png" },
      { name: "AWS", level: 3, icon: "/icons/skills/aws.png" },
      { name: "CI/CD", level: 3, icon: "/icons/skills/cicd.png" },
      { name: "Figma", level: 4, icon: "/icons/skills/figma.png" },
    ],
  },
];

const SkillBar = ({ level, name }: { level: number; name: string }) => {
  const width = `${level * 20}%`;

  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-gray-500">{level}/5</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

const SkillBadge = ({ skill }: { skill: SkillCategory["skills"][0] }) => {
  return (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
      {skill.icon ? (
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-6 h-6"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/24?text=S";
          }}
        />
      ) : (
        <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs">
          {skill.name.charAt(0)}
        </div>
      )}
      <span className="font-medium">{skill.name}</span>
      <div className="ml-auto flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full mx-0.5 ${
              i < skill.level ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function SkillsContent() {
  return (
    <div className="p-4 h-full overflow-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold mb-6">Skills & Expertise</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg"
            >
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                {category.name}
              </h2>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillBar name="JavaScript" level={5} />
            <SkillBar name="TypeScript" level={4} />
            <SkillBar name="Python" level={3} />
            <SkillBar name="HTML/CSS" level={5} />
            <SkillBar name="SQL" level={3} />
            <SkillBar name="PHP" level={2} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
