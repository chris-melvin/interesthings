// Navbar.js
import { Theme } from "@/types/theme";
import React from "react";

const Navbar = ({ theme }: { theme: Theme }) => {
  const scrollToAbout = () => {
    document
      .getElementById("about-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="p-4 flex justify-between items-center"
      style={{ color: theme.textColor }}
    >
      <h1 className="text-lg font-bold">interesthings.info</h1>
      <button
        onClick={scrollToAbout}
        className="hover:underline cursor-pointer text-lg font-bold"
      >
        About
      </button>
    </nav>
  );
};

export default Navbar;
