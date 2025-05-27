"use client";
import React, { useState, useEffect } from "react";
import NavLinks from "@/components/NavLinks";
import Button from "@/components/Button";
import SideBar from "@/components/SideBar";
import HamburgerMenuIcon from "@/components/HamburgerMenuIcon/HamburgerMenuIcon";
import Logo from "./Logo";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const SCROLL_THRESHOLD = 100; // Set a threshold for when the header starts hiding

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > SCROLL_THRESHOLD) {
        setHasScrolled(true); // Add shadow after crossing threshold
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsHeaderVisible(false);
        } else {
          // Scrolling up
          setIsHeaderVisible(true);
        }
      } else {
        setHasScrolled(false); // Remove shadow when near the top
        setIsHeaderVisible(true); // Ensure header remains visible near the top
      }

      setLastScrollY(currentScrollY);
    };

    // Scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, SCROLL_THRESHOLD]);

  useEffect(() => {
    // Handle scroll lock when sidebar is open
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Define handleResize inside useEffect to avoid missing dependency warning
    const handleResize = () => {
      if (window.innerWidth >= 768 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSidebarOpen]);

  return (
    <header
      className={`flex items-center justify-between p-4 pl-10 pr-10 h-24 z-50 fixed top-0 left-0 right-0 transform transition-transform duration-200
        ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}
        ${
          hasScrolled && !isSidebarOpen
            ? "shadow-lg bg-primary-blue/80 backdrop-blur-lg"
            : "bg-primary-blue"
        }`}
    >
      <Logo />
      <div className="hidden md:flex items-center space-x-8">
        <NavLinks orientation="row" />
        <Button text="Resume" link="/" bg_colour="primary-blue" />
      </div>
      <button onClick={toggleSidebar} className="md:hidden z-50">
        <HamburgerMenuIcon isOpen={isSidebarOpen} />
      </button>
      <SideBar isOpen={isSidebarOpen} />
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-opacity-10 backdrop-blur-sm z-30 h-screen w-screen"
        />
      )}
    </header>
  );
};

export default Header;
