"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, type PanInfo } from "framer-motion";
import { useDesktop } from "@/contexts/DesktopContext";

type MacWindowProps = {
  id: string;
  title: string;
  icon?: string;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
};

export default function MacWindow({
  id,
  title,
  icon,
  children,
  initialPosition = { x: 50, y: 50 },
  initialSize = { width: 600, height: 400 },
}: MacWindowProps) {
  const {
    activeWindowId,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    setActiveWindow,
    updateWindowPosition,
    updateWindowSize,
    windows,
  } = useDesktop();

  const windowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Find current window from context
  const currentWindow = windows.find((w) => w.id === id);

  if (!currentWindow) return null;

  const { isMaximized, zIndex, isMinimized, isOpen } = currentWindow;
  const isActive = activeWindowId === id;

  // If window is not open, don't render it
  if (!isOpen) return null;

  // If window is minimized, render it with minimized animation
  if (isMinimized) {
    return (
      <motion.div
        initial={{ opacity: 1, scale: 1, y: 0 }}
        animate={{ opacity: 0, scale: 0.3, y: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          zIndex: -1,
          pointerEvents: "none",
          visibility: "hidden"
        }}
      >
        <div className="hidden">{children}</div>
      </motion.div>
    );
  }

  // Handle window dragging
  const handleMouseDown = () => {
    if (!isMaximized && windowRef.current) {
      setIsDragging(true);
      setActiveWindow(id);
    }
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    updateWindowPosition(id, info.point.x, info.point.y);
  };

  return (
    <motion.div
      ref={windowRef}
      className={`mac-window animate-window-open ${isActive ? "ring-1 ring-primary/10" : "ring-0"}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        width: isMaximized ? "95%" : initialSize.width,
        height: isMaximized ? "90%" : initialSize.height,
        x: isMaximized ? "2.5%" : initialPosition.x,
        y: isMaximized ? "5%" : initialPosition.y,
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      drag={!isMaximized}
      dragMomentum={false}
      dragElastic={0}
      onDragStart={handleMouseDown}
      onDragEnd={handleDragEnd}
      onClick={() => setActiveWindow(id)}
      style={{
        position: "absolute",
        zIndex: zIndex,
        cursor: isDragging ? "grabbing" : "auto",
      }}
    >
      {/* Window Title Bar */}
      <div
        className="mac-window-title-bar"
        onMouseDown={handleMouseDown}
        style={{ cursor: isMaximized ? "default" : "move" }}
      >
        <div className="mac-window-btn-container">
          <div
            className="mac-window-btn mac-window-btn-close"
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
          />
          <div
            className="mac-window-btn mac-window-btn-minimize"
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
          />
          <div
            className="mac-window-btn mac-window-btn-maximize"
            onClick={(e) => {
              e.stopPropagation();
              maximizeWindow(id);
            }}
          />
        </div>
        <div className="flex-1 text-center text-sm font-medium">
          {icon && (
            <span className="mr-2">
              <img src={icon} alt="" className="inline-block w-4 h-4" />
            </span>
          )}
          {title}
        </div>
        <div className="w-16" /> {/* Spacer to center title */}
      </div>

      {/* Window Content */}
      <div className="mac-window-content">
        {children}
      </div>
    </motion.div>
  );
}
