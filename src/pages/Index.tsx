import { ArrowRight, GitBranch, Users, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Open Source Projects", value: "50+", icon: GitBranch },
  { label: "Contributors", value: "200+", icon: Users },
  { label: "GitHub Stars", value: "10K+", icon: Star },
  { label: "Commits", value: "5K+", icon: Zap },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up opacity-0 stagger-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Building Open Source Together
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 animate-fade-up opacity-0 stagger-2">
              Empowering{" "}
              <span className="gradient-text">Open Source</span>
              <br />
              Innovation
            </h1>

            {/* Subheading */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-3">
              Join our community of passionate developers building the future of
              software. Contribute, collaborate, and create amazing projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 stagger-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/projects">
                  Explore Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/contributors">Meet Contributors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why <span className="gradient-text">Open Source</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Open source is more than code—it's a community. Here's why we're
              passionate about it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Collaboration",
                description:
                  "Work with developers worldwide to build better software together.",
              },
              {
                title: "Transparency",
                description:
                  "Every line of code is visible, auditable, and improvable by anyone.",
              },
              {
                title: "Innovation",
                description:
                  "Rapid iteration and diverse perspectives drive breakthrough solutions.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl glass-card hover-lift animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Contribute?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join hundreds of developers making a difference in the open source
              community.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
