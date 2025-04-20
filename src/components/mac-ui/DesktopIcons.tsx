"use client";

import React from "react";
import { motion } from "framer-motion";
import { useDesktop } from "@/contexts/DesktopContext";

type DesktopIconProps = {
  id: string;
  icon: string;
  label: string;
  onClick: () => void;
};

const DesktopIcon = ({ id, icon, label, onClick }: DesktopIconProps) => {
  return (
    <motion.div
      className="desktop-icon text-center"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={icon} alt={label} className="w-12 h-12 mb-1" />
      <div className="text-xs font-medium text-white drop-shadow-md">
        {label}
      </div>
    </motion.div>
  );
};

type DesktopIconsProps = {
  className?: string;
};

export default function DesktopIcons({ className = "" }: DesktopIconsProps) {
  const { openWindow } = useDesktop();

  const handleIconClick = (id: string) => {
    openWindow(id);
  };

  return (
    <div className={`grid grid-cols-1 gap-4 p-4 ${className}`}>
      <DesktopIcon
        id="about"
        icon="/icons/about.png"
        label="About Me"
        onClick={() => handleIconClick("about")}
      />

      <DesktopIcon
        id="projects"
        icon="/icons/projects.png"
        label="Projects"
        onClick={() => handleIconClick("projects")}
      />

      <DesktopIcon
        id="skills"
        icon="/icons/skills.png"
        label="Skills"
        onClick={() => handleIconClick("skills")}
      />

      <DesktopIcon
        id="contact"
        icon="/icons/mail.png"
        label="Contact"
        onClick={() => handleIconClick("contact")}
      />

      <DesktopIcon
        id="resume"
        icon="/icons/resume.png"
        label="Resume"
        onClick={() => handleIconClick("resume")}
      />
    </div>
  );
}
