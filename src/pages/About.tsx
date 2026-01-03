import { Code2, Heart, Globe, Shield, Zap, Users } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Open by Default",
    description:
      "We believe in transparency. All our code is open source and available for anyone to use, modify, and contribute to.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Our community is at the heart of everything we do. We foster an inclusive environment where everyone can thrive.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Our projects are used by developers and companies worldwide, making technology accessible to all.",
  },
  {
    icon: Shield,
    title: "Security Focused",
    description:
      "We take security seriously. Every project undergoes rigorous review and follows best practices.",
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description:
      "We push the boundaries of what's possible, constantly exploring new technologies and approaches.",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    description:
      "We welcome contributors from all backgrounds and experience levels. Everyone has something valuable to offer.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-up opacity-0 stagger-1">
            About <span className="gradient-text">OpenSource</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up opacity-0 stagger-2">
            We're a passionate community of developers, designers, and
            technologists working together to build open source software that
            makes a difference.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="p-8 md:p-12 rounded-3xl glass-card animate-fade-up opacity-0 stagger-3">
            <h2 className="text-2xl font-display font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                OpenSource began in 2020 with a simple idea: make high-quality
                software accessible to everyone. What started as a small group
                of developers sharing code has grown into a thriving community
                of over 200 contributors from around the world.
              </p>
              <p>
                Today, our projects power thousands of applications and are used
                by developers at companies of all sizes. We remain committed to
                our founding principles: openness, collaboration, and
                excellence.
              </p>
              <p>
                Whether you're a seasoned developer or just starting your
                journey, there's a place for you here. We believe that diverse
                perspectives lead to better software, and we actively work to
                create an inclusive environment where everyone can contribute.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 rounded-2xl glass-card hover-lift animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <div className="space-y-8">
            {[
              { year: "2020", event: "OpenSource founded with 5 core members" },
              { year: "2021", event: "Reached 1,000 GitHub stars across projects" },
              { year: "2022", event: "Launched enterprise support program" },
              { year: "2023", event: "Community grew to 200+ contributors" },
              { year: "2024", event: "10,000+ GitHub stars milestone" },
            ].map((item, index) => (
              <div
                key={item.year}
                className="flex items-center gap-6 animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-primary">
                    {item.year}
                  </span>
                </div>
                <p className="text-muted-foreground">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
