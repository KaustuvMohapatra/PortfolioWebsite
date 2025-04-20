"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation";

type WindowType = {
  id: string;
  title: string;
  icon: string;
  component: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
};

type DesktopContextType = {
  windows: WindowType[];
  activeWindowId: string | null;
  isDarkMode: boolean;
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  setActiveWindow: (id: string) => void;
  registerWindow: (window: Omit<WindowType, "zIndex" | "isOpen" | "isMinimized" | "isMaximized">) => void;
  updateWindowPosition: (id: string, x: number, y: number) => void;
  updateWindowSize: (id: string, width: number, height: number) => void;
  toggleDarkMode: () => void;
};

const DesktopContext = createContext<DesktopContextType | undefined>(undefined);

export const useDesktop = () => {
  const context = useContext(DesktopContext);
  if (!context) {
    throw new Error("useDesktop must be used within a DesktopProvider");
  }
  return context;
};

type DesktopProviderProps = {
  children: ReactNode;
};

export const DesktopProvider = ({ children }: DesktopProviderProps) => {
  const [windows, setWindows] = useState<WindowType[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [highestZIndex, setHighestZIndex] = useState(100);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  // Handle dark mode
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Register a window
  const registerWindow = (window: Omit<WindowType, "zIndex" | "isOpen" | "isMinimized" | "isMaximized">) => {
    setWindows((prev) => {
      const exists = prev.find((w) => w.id === window.id);
      if (exists) return prev;
      return [
        ...prev,
        {
          ...window,
          isOpen: false,
          isMinimized: false,
          isMaximized: false,
          zIndex: 100,
        },
      ];
    });
  };

  // Open a window
  const openWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          return {
            ...w,
            isOpen: true,
            isMinimized: false,
            zIndex: highestZIndex + 1,
          };
        }
        return w;
      })
    );
    setActiveWindowId(id);
    setHighestZIndex((prev) => prev + 1);
  };

  // Close a window
  const closeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          return {
            ...w,
            isOpen: false,
          };
        }
        return w;
      })
    );
    if (activeWindowId === id) {
      // Find the highest zIndex window that is open
      const nextActiveWindow = [...windows]
        .filter((w) => w.id !== id && w.isOpen && !w.isMinimized)
        .sort((a, b) => b.zIndex - a.zIndex)[0];

      if (nextActiveWindow) {
        setActiveWindowId(nextActiveWindow.id);
      } else {
        setActiveWindowId(null);
      }
    }
  };

  // Minimize a window
  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          return {
            ...w,
            isMinimized: true,
          };
        }
        return w;
      })
    );
    if (activeWindowId === id) {
      // Find the highest zIndex window that is open and not minimized
      const nextActiveWindow = [...windows]
        .filter((w) => w.id !== id && w.isOpen && !w.isMinimized)
        .sort((a, b) => b.zIndex - a.zIndex)[0];

      if (nextActiveWindow) {
        setActiveWindowId(nextActiveWindow.id);
      } else {
        setActiveWindowId(null);
      }
    }
  };

  // Maximize a window
  const maximizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          return {
            ...w,
            isMaximized: !w.isMaximized,
          };
        }
        return w;
      })
    );
    setActiveWindow(id);
  };

  // Restore a minimized window
  const restoreWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          return {
            ...w,
            isMinimized: false,
            zIndex: highestZIndex + 1,
          };
        }
        return w;
      })
    );
    setActiveWindowId(id);
    setHighestZIndex((prev) => prev + 1);
  };

  // Set active window
  const setActiveWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          return {
            ...w,
            zIndex: highestZIndex + 1,
          };
        }
        return w;
      })
    );
    setActiveWindowId(id);
    setHighestZIndex((prev) => prev + 1);
  };

  // Update window position
  const updateWindowPosition = (id: string, x: number, y: number) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          return {
            ...w,
            position: { x, y },
          };
        }
        return w;
      })
    );
  };

  // Update window size
  const updateWindowSize = (id: string, width: number, height: number) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          return {
            ...w,
            size: { width, height },
          };
        }
        return w;
      })
    );
  };

  return (
    <DesktopContext.Provider
      value={{
        windows,
        activeWindowId,
        isDarkMode,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        restoreWindow,
        setActiveWindow,
        registerWindow,
        updateWindowPosition,
        updateWindowSize,
        toggleDarkMode,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
};
