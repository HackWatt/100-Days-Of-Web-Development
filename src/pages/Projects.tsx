import { Star, GitFork, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "CodeFlow",
    description: "A modern code collaboration platform built for teams.",
    stars: 2340,
    forks: 456,
    language: "TypeScript",
    color: "#3178c6",
  },
  {
    name: "DataPipe",
    description: "Real-time data pipeline framework for scalable applications.",
    stars: 1890,
    forks: 234,
    language: "Python",
    color: "#3776ab",
  },
  {
    name: "UIKit Pro",
    description: "Beautiful React components for modern web applications.",
    stars: 3200,
    forks: 678,
    language: "React",
    color: "#61dafb",
  },
  {
    name: "CloudSync",
    description: "Seamless cloud synchronization for distributed systems.",
    stars: 1560,
    forks: 189,
    language: "Go",
    color: "#00add8",
  },
  {
    name: "SecureAuth",
    description: "Enterprise-grade authentication and authorization library.",
    stars: 980,
    forks: 123,
    language: "Rust",
    color: "#dea584",
  },
  {
    name: "APIGateway",
    description: "High-performance API gateway with built-in rate limiting.",
    stars: 2100,
    forks: 345,
    language: "Node.js",
    color: "#339933",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-up opacity-0 stagger-1">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up opacity-0 stagger-2">
            Explore our collection of open source projects. Each one is built
            with love and maintained by our amazing community.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group p-6 rounded-2xl glass-card hover-lift animate-fade-up opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <span className="text-sm text-muted-foreground">
                      {project.language}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>{project.stars.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  <span>{project.forks.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
