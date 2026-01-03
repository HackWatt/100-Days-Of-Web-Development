import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 blur-2xl bg-primary/30 rounded-full animate-pulse-glow" />
          <div className="relative flex items-center gap-3 p-4">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center loader-spin">
              <Code2 className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold tracking-tight">
            <span className="gradient-text">Open</span>
            <span className="text-foreground">Source</span>
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Building the future together
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-muted-foreground">{progress}%</p>
      </div>
    </div>
  );
};

export default Loader;
