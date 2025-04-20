"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDesktop } from "@/contexts/DesktopContext";
import MenuBar from "@/components/mac-ui/MenuBar";
import MacDock from "@/components/mac-ui/MacDock";
import MacWindow from "@/components/mac-ui/MacWindow";
import DesktopIcons from "@/components/mac-ui/DesktopIcons";

// Import content components
import AboutContent from "@/components/content/AboutContent";
import ProjectsContent from "@/components/content/ProjectsContent";
import SkillsContent from "@/components/content/SkillsContent";
import ContactContent from "@/components/content/ContactContent";

export default function Desktop() {
  const { registerWindow, isDarkMode } = useDesktop();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowsRegistered, setWindowsRegistered] = useState(false);

  // Register all windows
  useEffect(() => {
    if (!windowsRegistered) {
      // About window
      registerWindow({
        id: "about",
        title: "About Me",
        icon: "/icons/about.png",
        component: <AboutContent />,
        position: { x: 100, y: 50 },
        size: { width: 700, height: 500 },
      });

      // Projects window
      registerWindow({
        id: "projects",
        title: "Projects",
        icon: "/icons/projects.png",
        component: <ProjectsContent />,
        position: { x: 150, y: 70 },
        size: { width: 800, height: 600 },
      });

      // Skills window
      registerWindow({
        id: "skills",
        title: "Skills",
        icon: "/icons/skills.png",
        component: <SkillsContent />,
        position: { x: 200, y: 90 },
        size: { width: 750, height: 550 },
      });

      // Contact window
      registerWindow({
        id: "contact",
        title: "Contact",
        icon: "/icons/mail.png",
        component: <ContactContent />,
        position: { x: 250, y: 110 },
        size: { width: 700, height: 550 },
      });

      // Finder window
      registerWindow({
        id: "finder",
        title: "Finder",
        icon: "/icons/finder.png",
        component: (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">My Files</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="desktop-icon">
                <img src="/icons/resume.png" alt="Resume" className="w-16 h-16" />
                <span>resume.pdf</span>
              </div>
              <div className="desktop-icon">
                <img src="/icons/folder.png" alt="Folder" className="w-16 h-16" />
                <span>Projects</span>
              </div>
              <div className="desktop-icon">
                <img src="/icons/folder.png" alt="Folder" className="w-16 h-16" />
                <span>Images</span>
              </div>
              <div className="desktop-icon">
                <img src="/icons/document.png" alt="Document" className="w-16 h-16" />
                <span>notes.txt</span>
              </div>
            </div>
          </div>
        ),
        position: { x: 50, y: 50 },
        size: { width: 600, height: 400 },
      });

      // Settings window
      registerWindow({
        id: "settings",
        title: "Settings",
        icon: "/icons/settings.png",
        component: (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <div className="space-y-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 className="font-medium mb-2">Theme</h3>
                <div className="flex items-center space-x-4">
                  <button
                    className={`px-4 py-2 rounded-md ${!isDarkMode ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                  >
                    Light
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${isDarkMode ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                  >
                    Dark
                  </button>
                </div>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 className="font-medium mb-2">Language</h3>
                <select className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          </div>
        ),
        position: { x: 300, y: 150 },
        size: { width: 500, height: 400 },
      });

      setWindowsRegistered(true);
    }
  }, [registerWindow, windowsRegistered, isDarkMode]);

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate parallax effect for background
  const moveX = mousePosition.x / 100;
  const moveY = mousePosition.y / 100;

  // All windows from context
  const { windows } = useDesktop();

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Desktop Background with parallax effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: isDarkMode
            ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
            : "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
          transform: `translate(${-moveX}px, ${-moveY}px) scale(1.1)`,
          transition: "transform 0.2s ease-out"
        }}
      >
        {/* Stars or clouds effect */}
        {isDarkMode ? (
          // Stars for dark mode
          <>
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 3 + 1 + "px",
                  height: Math.random() * 3 + 1 + "px",
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.8 + 0.2,
                  animation: `twinkle ${Math.random() * 5 + 5}s infinite`
                }}
              />
            ))}
          </>
        ) : (
          // Clouds for light mode
          <>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`cloud-${i}`}
                className="absolute rounded-full bg-white/30"
                style={{
                  width: Math.random() * 300 + 100 + "px",
                  height: Math.random() * 100 + 50 + "px",
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 50 + "%",
                  filter: "blur(40px)",
                  opacity: Math.random() * 0.4 + 0.1,
                  transform: `scale(${Math.random() * 0.5 + 0.8})`,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Desktop Icons */}
      <DesktopIcons className="absolute top-10 right-4 z-10" />

      {/* Menu Bar */}
      <MenuBar />

      {/* Windows */}
      {windows.map((window) => (
        <MacWindow
          key={window.id}
          id={window.id}
          title={window.title}
          icon={window.icon}
          initialPosition={window.position}
          initialSize={window.size}
        >
          {window.component}
        </MacWindow>
      ))}

      {/* Dock */}
      <MacDock />
    </div>
  );
}
