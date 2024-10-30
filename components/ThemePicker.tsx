import { Theme } from "@/types/theme";

interface ThemePickerProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const themes = {
  dark: {
    bgColor: "#121212",
    pageBGColor: "#121212ee",
    textColor: "#fff",
    borderColor: "#242424",
    hoverColor: "#242424",
    secondaryTextColor: "#eee",
  },
  light: {
    bgColor: "#ffffff",
    pageBGColor: "#eee",
    textColor: "#000000",
    borderColor: "#e5e5e5",
    hoverColor: "#f5f5f5",
    secondaryTextColor: "#111",
  },
  blue: {
    bgColor: "#1a237e",
    pageBGColor: "#1a237eee",
    textColor: "#ffffff",
    borderColor: "#283593",
    hoverColor: "#283593",
    secondaryTextColor: "#eee",
  },
  red: {
    bgColor: "#800000",
    pageBGColor: "#800000ee",
    textColor: "#ffffff",
    borderColor: "#800000",
    hoverColor: "#800000",
    secondaryTextColor: "#eee",
  },
};

export default function ThemePicker({
  currentTheme,
  onThemeChange,
}: ThemePickerProps) {
  return (
    <div className="flex gap-2 mb-4">
      {Object.entries(themes).map(([name, theme]) => (
        <button
          key={name}
          onClick={() => onThemeChange(theme)}
          className="w-8 h-8 rounded-full border-2"
          style={{
            backgroundColor: theme.bgColor,
            borderColor:
              currentTheme.bgColor === theme.bgColor
                ? theme.textColor
                : theme.borderColor,
          }}
          aria-label={`Switch to ${name} theme`}
        />
      ))}
    </div>
  );
}
