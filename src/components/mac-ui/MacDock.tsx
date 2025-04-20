"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useDesktop } from "@/contexts/DesktopContext";
import {
  FolderSearch,
  User,
  Code2,
  BarChart2,
  Github,
  Mail,
  Linkedin,
  Settings,
  FileText,
  BookOpen,
} from "lucide-react";

type DockItemProps = {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  hasIndicator?: boolean;
};

// Individual dock item component
const DockItem = ({ id, icon, label, onClick, hasIndicator = false }: DockItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="mac-dock-item group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.2, y: -10 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-md">
        {icon}
      </div>

      {/* App name tooltip */}
      <motion.div
        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, y: 5 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 5
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.div>

      {/* Running indicator */}
      {hasIndicator && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
      )}
    </motion.div>
  );
};

type MacDockProps = {
  className?: string;
};

export default function MacDock({ className = "" }: MacDockProps) {
  const { windows, openWindow, restoreWindow } = useDesktop();
  const dockRef = useRef<HTMLDivElement>(null);

  // Handle dock item click
  const handleDockItemClick = (id: string) => {
    const window = windows.find(w => w.id === id);

    if (window) {
      if (window.isOpen && window.isMinimized) {
        restoreWindow(id);
      } else if (window.isOpen) {
        // If already open, minimize it
        // minimizeWindow(id);
      } else {
        openWindow(id);
      }
    }
  };

  return (
    <motion.div
      ref={dockRef}
      className={`mac-dock ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      {/* System apps */}
      <DockItem
        id="finder"
        icon={<FolderSearch className="w-6 h-6 text-blue-500" />}
        label="Finder"
        onClick={() => handleDockItemClick("finder")}
        hasIndicator={windows.some(w => w.id === "finder" && w.isOpen)}
      />

      <DockItem
        id="about"
        icon={<User className="w-6 h-6 text-green-500" />}
        label="About Me"
        onClick={() => handleDockItemClick("about")}
        hasIndicator={windows.some(w => w.id === "about" && w.isOpen)}
      />

      <DockItem
        id="projects"
        icon={<Code2 className="w-6 h-6 text-red-500" />}
        label="Projects"
        onClick={() => handleDockItemClick("projects")}
        hasIndicator={windows.some(w => w.id === "projects" && w.isOpen)}
      />

      <DockItem
        id="skills"
        icon={<BarChart2 className="w-6 h-6 text-orange-500" />}
        label="Skills"
        onClick={() => handleDockItemClick("skills")}
        hasIndicator={windows.some(w => w.id === "skills" && w.isOpen)}
      />

      <div className="mac-dock-divider" />

      {/* External links */}
      <DockItem
        id="github"
        icon={<Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />}
        label="GitHub"
        onClick={() => window.open('https://github.com', '_blank')}
        hasIndicator={false}
      />

      <DockItem
        id="linkedin"
        icon={<Linkedin className="w-6 h-6 text-blue-600" />}
        label="LinkedIn"
        onClick={() => window.open('https://linkedin.com', '_blank')}
        hasIndicator={false}
      />

      <DockItem
        id="mail"
        icon={<Mail className="w-6 h-6 text-cyan-500" />}
        label="Contact Me"
        onClick={() => handleDockItemClick("contact")}
        hasIndicator={windows.some(w => w.id === "contact" && w.isOpen)}
      />

      <div className="mac-dock-divider" />

      {/* System preferences */}
      <DockItem
        id="settings"
        icon={<Settings className="w-6 h-6 text-gray-500" />}
        label="Settings"
        onClick={() => handleDockItemClick("settings")}
        hasIndicator={windows.some(w => w.id === "settings" && w.isOpen)}
      />
    </motion.div>
  );
}
