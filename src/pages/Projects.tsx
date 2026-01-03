import { useState, useEffect } from "react";
import { Star, GitFork, ExternalLink, Calendar, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

// Project data structure including your GitHub commit info
interface Project {
  id: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  color: string;
  lastCommitMessage: string;
  lastCommitDate: string;
  category: string;
  demoUrl?: string;
  repoUrl?: string;
}

const initialProjects: Project[] = [
  {
    id: "day-03",
    name: "Day 03",
    description: "Todo List Application ",
    stars: 42,
    forks: 8,
    language: "React",
    color: "#61dafb",
    lastCommitMessage: "Add Day 03 project under public folder",
    lastCommitDate: "yesterday",
    category: "web",
    demoUrl: "/projects/day-03",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-03"
  },
  {
    id: "day-04",
    name: "Day 04 - Weather App",
    description: "A responsive weather application with real-time forecasts",
    stars: 89,
    forks: 23,
    language: "JavaScript",
    color: "#f7df1e",
    lastCommitMessage: "Merge branch 'main' into Feat/Day-04-Weather-App",
    lastCommitDate: "4 hours ago",
    category: "web",
    demoUrl: "/projects/day-04",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-04"
  },
  {
    id: "day-05",
    name: "Day 05 - Calculator",
    description: "Modern calculator application with scientific functions",
    stars: 156,
    forks: 45,
    language: "TypeScript",
    color: "#3178c6",
    lastCommitMessage: "Calculator App (#123)",
    lastCommitDate: "1 hour ago",
    category: "web",
    demoUrl: "/projects/day-05",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-05"
  },
  {
    id: "day-08",
    name: "Day 08",
    description: "Interactive web application with modern UI",
    stars: 34,
    forks: 12,
    language: "React",
    color: "#61dafb",
    lastCommitMessage: "Remove DAY 20",
    lastCommitDate: "1 hour ago",
    category: "web",
    demoUrl: "/projects/day-08",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-08"
  },
  {
    id: "day-13",
    name: "Day 13 - Chat UI",
    description: "Real-time chat interface with message threading",
    stars: 210,
    forks: 67,
    language: "React",
    color: "#61dafb",
    lastCommitMessage: "adding chat UI",
    lastCommitDate: "yesterday",
    category: "web",
    demoUrl: "/projects/day-13",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-13"
  },
  {
    id: "day-15",
    name: "Day 15 - Drawing App",
    description: "Canvas-based drawing application with multiple tools",
    stars: 187,
    forks: 54,
    language: "JavaScript",
    color: "#f7df1e",
    lastCommitMessage: "Make this day-15-drawing-app",
    lastCommitDate: "yesterday",
    category: "tools",
    demoUrl: "/projects/day-15",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-15"
  },
  {
    id: "day-20",
    name: "Day 20 - QR Generator",
    description: "QR code generator with customization options",
    stars: 123,
    forks: 32,
    language: "TypeScript",
    color: "#3178c6",
    lastCommitMessage: "QR-Code-Generator",
    lastCommitDate: "yesterday",
    category: "tools",
    demoUrl: "/projects/day-20",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-20"
  },
  {
    id: "day-21",
    name: "Day 21 - Flashcards",
    description: "Interactive flashcards app for learning",
    stars: 98,
    forks: 28,
    language: "React",
    color: "#61dafb",
    lastCommitMessage: "Flashcards App",
    lastCommitDate: "yesterday",
    category: "education",
    demoUrl: "/projects/day-21",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-21"
  },
  {
    id: "day-24",
    name: "Day 24",
    description: "Advanced web application with modern features",
    stars: 45,
    forks: 15,
    language: "JavaScript",
    color: "#f7df1e",
    lastCommitMessage: "Merge branch 'main' into main",
    lastCommitDate: "4 hours ago",
    category: "web",
    demoUrl: "/projects/day-24",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-24"
  },
  {
    id: "day-27",
    name: "Day 27 - Rice Dollar",
    description: "E-commerce application for rice products",
    stars: 167,
    forks: 41,
    language: "React",
    color: "#61dafb",
    lastCommitMessage: "Day-27 Rice Dollar ECWoC-26",
    lastCommitDate: "yesterday",
    category: "web",
    demoUrl: "/projects/day-27",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-27"
  },
  {
    id: "day-28",
    name: "Day 28",
    description: "Image optimization tool with batch processing",
    stars: 132,
    forks: 38,
    language: "TypeScript",
    color: "#3178c6",
    lastCommitMessage: "[ImgBot] Optimize images",
    lastCommitDate: "yesterday",
    category: "tools",
    demoUrl: "/projects/day-28",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-28"
  },
  {
    id: "day-29",
    name: "Day 29",
    description: "Advanced application with modern architecture",
    stars: 76,
    forks: 21,
    language: "JavaScript",
    color: "#f7df1e",
    lastCommitMessage: "Addition of Day 29 Files (#120)",
    lastCommitDate: "1 hour ago",
    category: "web",
    demoUrl: "/projects/day-29",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-29"
  },
  {
    id: "day-30",
    name: "Day 30",
    description: "Final project with comprehensive features",
    stars: 189,
    forks: 52,
    language: "React",
    color: "#61dafb",
    lastCommitMessage: "Day 30 updated in Required format",
    lastCommitDate: "yesterday",
    category: "web",
    demoUrl: "/projects/day-30",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-30"
  },
  {
    id: "day-36",
    name: "Day 36",
    description: "Challenge project with innovative solutions",
    stars: 65,
    forks: 19,
    language: "TypeScript",
    color: "#3178c6",
    lastCommitMessage: "Day 36 Challange file Commit",
    lastCommitDate: "yesterday",
    category: "challenge",
    demoUrl: "/projects/day-36",
    repoUrl: "https://github.com/yourusername/projects/tree/main/day-36"
  },
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(initialProjects);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"stars" | "recent" | "name">("stars");

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Apps" },
    { value: "tools", label: "Tools" },
    { value: "education", label: "Education" },
    { value: "challenge", label: "Challenges" },
  ];

  useEffect(() => {
    // Filter projects by category
    let filtered = selectedCategory === "all" 
      ? projects 
      : projects.filter(project => project.category === selectedCategory);

    // Sort projects
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "stars":
          return b.stars - a.stars;
        case "recent":
          // Simple recent sorting based on last commit date
          const dateA = getDateValue(a.lastCommitDate);
          const dateB = getDateValue(b.lastCommitDate);
          return dateB - dateA;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredProjects(filtered);
  }, [selectedCategory, sortBy, projects]);

  const getDateValue = (dateString: string): number => {
    const now = new Date();
    if (dateString.includes("hour")) {
      const hours = parseInt(dateString);
      return now.getTime() - (hours * 60 * 60 * 1000);
    } else if (dateString.includes("yesterday")) {
      return now.getTime() - (24 * 60 * 60 * 1000);
    }
    return now.getTime();
  };

  const handleProjectClick = (project: Project) => {
    // Navigate to project page or open demo
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    } else if (project.repoUrl) {
      window.open(project.repoUrl, '_blank');
    }
  };

  const handleViewDemo = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    }
  };

  const handleViewCode = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    if (project.repoUrl) {
      window.open(project.repoUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-up opacity-0 stagger-1">
            My <span className="gradient-text">100-Day Challenge</span> Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up opacity-0 stagger-2 mb-8">
            A collection of projects built during my 30-day coding challenge. 
            Each project showcases different technologies and problem-solving approaches.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up opacity-0 stagger-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium">{projects.length} Projects</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span className="text-sm font-medium">
                {projects.reduce((sum, p) => sum + p.stars, 0).toLocaleString()} Total Stars
              </span>
            </div>
          </div>
        </div>

        {/* Filters and Sorting */}
        <div className="mb-12 animate-fade-up opacity-0 stagger-4">
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <TabsList className="flex-wrap h-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category.value} value={category.value}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <div className="flex gap-2">
                  <Button
                    variant={sortBy === "stars" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSortBy("stars")}
                  >
                    Most Stars
                  </Button>
                  <Button
                    variant={sortBy === "recent" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSortBy("recent")}
                  >
                    Most Recent
                  </Button>
                  <Button
                    variant={sortBy === "name" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSortBy("name")}
                  >
                    Name
                  </Button>
                </div>
              </div>
            </div>
          </Tabs>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group cursor-pointer hover-lift transition-all duration-300 hover:shadow-2xl animate-fade-up opacity-0 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${0.05 * index}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: project.color }}
                      />
                      <span className="text-sm text-muted-foreground">
                        {project.language}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-all"
                      onClick={(e) => handleViewDemo(e, project)}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pb-4">
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Commit Info */}
                <div className="space-y-3 p-4 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-2 text-sm">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-medium">Last Commit:</span>
                    <span className="text-muted-foreground truncate">{project.lastCommitMessage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span className="text-muted-foreground">{project.lastCommitDate}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center pt-4 border-t">
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-medium">{project.stars.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span className="font-medium">{project.forks.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => handleViewDemo(e, project)}
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={(e) => handleViewCode(e, project)}
                  >
                    View Code
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Stats and CTA */}
        <div className="text-center">
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl glass-card mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">{projects.length}</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">
                {projects.reduce((sum, p) => sum + p.stars, 0).toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">
                {projects.reduce((sum, p) => sum + p.forks, 0).toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Forks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">30</div>
              <div className="text-sm text-muted-foreground">Days of Code</div>
            </div>
          </div>
          
          <Button size="lg" className="px-8">
            View All Projects on GitHub
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Projects update in real-time from GitHub commits
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;