"use client";
import Grid from "@/components/Grid";
import { Theme } from "@/types/theme";
import { useState } from "react";
import ThemePicker from "@/components/ThemePicker";
import facts from "@/assets/facts.json";
import ViewPicker from "@/components/ViewPicker";
import List from "@/components/List";
import { CardStack } from "@/components/CardSwipe";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  const [theme, setTheme] = useState<Theme>({
    bgColor: "#121212",
    pageBGColor: "#121212ee",
    textColor: "#fff",
    borderColor: "#242424",
    hoverColor: "#242424",
    secondaryTextColor: "#eee",
  });
  const [view, setView] = useState<"grid" | "list" | "swipe">("grid");
  const fontFamily = "Arial, Helvetica, sans-serif";

  return (
    <main className="p-4" style={{ backgroundColor: theme.pageBGColor }}>
      <Navbar theme={theme} />
      <div className="flex justify-between">
        <ThemePicker currentTheme={theme} onThemeChange={setTheme} />
        <ViewPicker currentView={view} onViewChange={setView} theme={theme} />
      </div>

      <div className="flex justify-center">
        <h2
          className="text-lg font-semibold"
          style={{ color: theme.textColor }}
        >
          Read some fun facts you can share with your friends!
        </h2>
      </div>

      <hr
        className="border-b my-5 "
        style={{ borderColor: theme.borderColor }}
      />

      {view === "grid" && (
        <Grid theme={theme} fontFamily={fontFamily} funFact={facts.facts} />
      )}

      {view === "list" && (
        <List theme={theme} fontFamily={fontFamily} funFact={facts.facts} />
      )}

      {view === "swipe" && (
        <CardStack
          theme={theme}
          fontFamily={fontFamily}
          funFact={facts.facts}
        />
      )}

      <hr
        className="border-b my-5 "
        style={{ borderColor: theme.borderColor }}
      />

      <AboutSection theme={theme} />
    </main>
  );
}
