"use client"
import * as React from "react"
import { MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const styles = `
  .theme-switch {
    width: 62px;
    height: 32px;
    background-color: #e2e8f0; /* Light gray for light mode */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50px;
    padding: 5px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
  }
  .theme-switch.dark {
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  }
  .theme-switch-handle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 28px;
    height: 28px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
    z-index: 1;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  .theme-switch.dark .theme-switch-handle {
    transform: translateX(30px);
  }
  .theme-switch-icon {
    width: 16px;
    height: 16px;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .theme-switch-icon.sun {
    color: #fbbf24;
    opacity: 1;
    transform: rotate(0deg);
  }
  .theme-switch-icon.moon {
    color: #8b5cf6;
    position: absolute;
    opacity: 0;
    transform: rotate(-90deg);
  }
  .theme-switch.dark .theme-switch-icon.sun {
    opacity: 0;
    transform: rotate(90deg);
  }
  .theme-switch.dark .theme-switch-icon.moon {
    opacity: 1;
    transform: rotate(0deg);
  }
`

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div 
        className={`theme-switch ${theme === 'dark' ? 'dark' : ''}`}
        onClick={toggleTheme}
        role="button"
        tabIndex={0}
        aria-label="Toggle theme"
      >
        <div className="theme-switch-handle">
          <Sun className="theme-switch-icon sun" />
          <MoonStar className="theme-switch-icon moon" />
        </div>
      </div>
    </>
  )
}