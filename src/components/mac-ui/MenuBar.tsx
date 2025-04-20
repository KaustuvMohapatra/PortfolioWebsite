"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDesktop } from "@/contexts/DesktopContext";
import {
  SunIcon,
  MoonIcon,
  BatteryIcon,
  WifiIcon,
  Volume2Icon,
  AppleIcon // Fixed to use AppleIcon instead of Apple
} from "lucide-react";

type MenuBarProps = {
  className?: string;
};

export default function MenuBar({ className = "" }: MenuBarProps) {
  const { activeWindowId, windows, isDarkMode, toggleDarkMode } = useDesktop();
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' }));
    };

    // Initial update
    updateTime();

    // Set up interval
    const interval = setInterval(updateTime, 1000);

    // Clean up
    return () => clearInterval(interval);
  }, []);

  // Get active window title
  const activeWindow = windows.find(w => w.id === activeWindowId);
  const activeAppName = activeWindow?.title || "Mac Portfolio";

  return (
    <motion.div
      className={`menu-bar ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Left section - App name and basic menu */}
      <div className="flex items-center space-x-4">
        <div className="font-semibold flex items-center">
          <AppleIcon className="w-4 h-4 mr-2" />
          {activeAppName}
        </div>
        <div className="text-xs opacity-70">File</div>
        <div className="text-xs opacity-70">Edit</div>
        <div className="text-xs opacity-70">View</div>
        <div className="text-xs opacity-70">Window</div>
        <div className="text-xs opacity-70">Help</div>
      </div>

      {/* Right section - System icons */}
      <div className="flex items-center space-x-3">
        <div className="text-xs">{currentDate}</div>
        <div className="text-xs font-medium">{currentTime}</div>

        <div
          className="cursor-pointer"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <MoonIcon className="w-4 h-4" />
          ) : (
            <SunIcon className="w-4 h-4" />
          )}
        </div>

        <WifiIcon className="w-4 h-4 opacity-70" />
        <Volume2Icon className="w-4 h-4 opacity-70" />
        <BatteryIcon className="w-4 h-4 opacity-70" />
      </div>
    </motion.div>
  );
}
