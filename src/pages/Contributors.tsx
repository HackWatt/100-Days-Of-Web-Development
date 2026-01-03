import { Github, Twitter, Globe } from "lucide-react";

const contributors = [
  {
    name: "Alex Chen",
    role: "Core Maintainer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    contributions: 342,
    github: "#",
  },
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    contributions: 289,
    github: "#",
  },
  {
    name: "Mike Wilson",
    role: "Documentation Lead",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    contributions: 156,
    github: "#",
  },
  {
    name: "Emily Davis",
    role: "UI/UX Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    contributions: 198,
    github: "#",
  },
  {
    name: "David Kim",
    role: "Backend Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    contributions: 267,
    github: "#",
  },
  {
    name: "Lisa Wang",
    role: "DevOps Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    contributions: 134,
    github: "#",
  },
  {
    name: "James Brown",
    role: "Security Expert",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    contributions: 89,
    github: "#",
  },
  {
    name: "Anna Martinez",
    role: "Community Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
    contributions: 178,
    github: "#",
  },
];

const Contributors = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-up opacity-0 stagger-1">
            Our <span className="gradient-text">Contributors</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up opacity-0 stagger-2">
            Meet the amazing people who make our open source projects possible.
            Every contribution matters.
          </p>
        </div>

        {/* Contributors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((contributor, index) => (
            <div
              key={contributor.name}
              className="group p-6 rounded-2xl glass-card hover-lift text-center animate-fade-up opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative mx-auto w-24 h-24 mb-4">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors" />
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="relative w-24 h-24 rounded-full border-2 border-border group-hover:border-primary transition-colors"
                />
              </div>

              <h3 className="text-lg font-display font-semibold mb-1">
                {contributor.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {contributor.role}
              </p>

              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                {contributor.contributions} contributions
              </div>

              <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={contributor.github}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <Twitter className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <Globe className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Contributor CTA */}
        <div className="mt-20 text-center p-12 rounded-3xl glass-card">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Want to become a contributor?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We welcome developers of all skill levels. Pick an issue, submit a
            PR, and join our growing community.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Github className="w-5 h-5" />
            Start Contributing
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
