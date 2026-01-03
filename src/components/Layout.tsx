import { useState, useEffect } from "react";
import AppSidebar from "./AppSidebar";
import Loader from "./Loader";
import { cn } from "@/lib/utils";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(256);

  useEffect(() => {
    const handleResize = () => {
      const sidebar = document.querySelector("aside");
      if (sidebar) {
        setSidebarWidth(sidebar.clientWidth);
      }
    };

    const observer = new MutationObserver(handleResize);
    const sidebar = document.querySelector("aside");
    if (sidebar) {
      observer.observe(sidebar, { attributes: true });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [loading]);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <main
        className={cn("min-h-screen transition-all duration-300")}
        style={{ marginLeft: sidebarWidth }}
      >
        <div className="animate-fade-in">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
