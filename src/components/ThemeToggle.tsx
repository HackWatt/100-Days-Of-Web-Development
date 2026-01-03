import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative rounded-full group hover:bg-primary/10 transition-all duration-300"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon container */}
      <div className="relative">
        {/* Sun icon */}
        <Sun className={`h-5 w-5 text-yellow-500 transition-all duration-300 ${
          theme === "dark" 
            ? "opacity-100 rotate-0 scale-100" 
            : "opacity-0 rotate-90 scale-0 absolute"
        }`} />
        
        {/* Moon icon */}
        <Moon className={`h-5 w-5 text-cyan-500 transition-all duration-300 ${
          theme === "light" 
            ? "opacity-100 rotate-0 scale-100" 
            : "opacity-0 -rotate-90 scale-0 absolute"
        }`} />
      </div>
    </Button>
  );
};

export default ThemeToggle;