import { Theme } from "@/types/theme";
import { ArrowRightLeft, Grid, List } from "lucide-react";
import React from "react";

interface ViewPickerProps {
  currentView: "grid" | "list" | "swipe";
  onViewChange: (view: "grid" | "list" | "swipe") => void;
  theme: Theme;
}

const ViewPicker: React.FC<ViewPickerProps> = ({
  currentView,
  onViewChange,
  theme,
}) => {
  return (
    <div className="flex space-x-4">
      <button
        className={`p-2 ${currentView === "grid" ? "font-bold" : ""}`}
        onClick={() => onViewChange("grid")}
      >
        <Grid color={theme.textColor} />
      </button>
      <button
        className={`p-2 ${currentView === "list" ? "font-bold" : ""}`}
        onClick={() => onViewChange("list")}
      >
        <List color={theme.textColor} />
      </button>
      <button
        className={`p-2 ${currentView === "swipe" ? "font-bold" : ""}`}
        onClick={() => onViewChange("swipe")}
      >
        <ArrowRightLeft color={theme.textColor} />
      </button>
    </div>
  );
};

export default ViewPicker;
