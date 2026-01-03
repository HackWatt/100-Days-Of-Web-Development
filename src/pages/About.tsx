"use client";

import { Code2, Heart, Globe, Shield, Zap, Users, Target, BookOpen, Github, Calendar, Trophy, TrendingUp, Star, GitMerge, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const values = [
  {
    icon: Code2,
    title: "Code Every Day",
    description: "Consistent daily practice is the key to mastering web development. We commit to writing code every single day.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "Community Learning",
    description: "Learning together, growing together. Our Discord community provides support, feedback, and collaboration.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: BookOpen,
    title: "Learn by Building",
    description: "Real projects teach real skills. Each day, we build something tangible that adds to our portfolio.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Clear milestones and progress tracking ensure we stay focused and motivated throughout the 100-day journey.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Shield,
    title: "Open Source Focus",
    description: "All projects are open source, encouraging collaboration, code reviews, and community contributions.",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Trophy,
    title: "Portfolio Building",
    description: "By day 100, every participant has a robust portfolio showcasing 100+ real-world projects.",
    color: "from-red-500 to-pink-500"
  },
];

const About = () => {
  const stats = {
    daysCompleted: 36,
    totalDays: 100,
    contributors: 23,
    projects: 36,
    stars: 12,
    forks: 34,
    discordMembers: 150
  };

  const progressPercentage = (stats.daysCompleted / stats.totalDays) * 100;

  const openGitHub = () => {
    window.open("https://github.com/Shubham-cyber-prog/100-Days-Of-Web-Development-ECWoC26", "_blank");
  };

  const openDiscord = () => {
    window.open("https://discord.gg/SW7puwEm", "_blank");
  };

  const openProgressTracker = () => {
    window.open("https://100days-progress-tracker.netlify.app/", "_blank");
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium">100 Days Challenge in Progress</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            100 Days of Web Development
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A comprehensive journey through HTML, CSS & JavaScript. Daily learning, practice, 
            and real-world projects to master frontend development.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500">
              <Github className="w-4 h-4 mr-2" />
              {stats.contributors} Contributors
            </Badge>
            <Badge className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500">
              <Star className="w-4 h-4 mr-2" />
              {stats.stars} GitHub Stars
            </Badge>
            <Badge className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500">
              <GitMerge className="w-4 h-4 mr-2" />
              {stats.forks} Forks
            </Badge>
            <Badge className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500">
              <Users className="w-4 h-4 mr-2" />
              {stats.discordMembers}+ Discord Members
            </Badge>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-primary to-purple-600"
              onClick={openGitHub}
            >
              <Github className="w-5 h-5" />
              View Repository
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-primary/30"
              onClick={openDiscord}
            >
              <Users className="w-5 h-5" />
              Join Discord
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-green-500/30"
              onClick={openProgressTracker}
            >
              <TrendingUp className="w-5 h-5" />
              Progress Tracker
            </Button>
          </div>
        </div>

        {/* Progress Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-primary/5 to-purple-600/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Challenge Progress</h2>
                  <p className="text-muted-foreground">
                    Currently on Day {stats.daysCompleted} of {stats.totalDays}
                  </p>
                </div>
                <Badge className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500">
                  {stats.daysCompleted} / {stats.totalDays} Days Completed
                </Badge>
              </div>
              
              <Progress value={progressPercentage} className="h-3 mb-4" />
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <div className="text-2xl font-bold text-primary">{stats.daysCompleted}</div>
                  <div className="text-sm text-muted-foreground">Days Done</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <div className="text-2xl font-bold text-blue-500">{stats.projects}</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <div className="text-2xl font-bold text-purple-500">{stats.contributors}</div>
                  <div className="text-sm text-muted-foreground">Contributors</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <div className="text-2xl font-bold text-green-500">{100 - stats.daysCompleted}</div>
                  <div className="text-sm text-muted-foreground">Days Left</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              About This Challenge
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                This repository documents my 100 Days of Web Development Challenge, where I consistently 
                learn, practice, and build projects using <strong>HTML, CSS, and JavaScript</strong>. 
                The goal is to strengthen frontend fundamentals, improve problem-solving, and build 
                real-world projects while maintaining daily GitHub consistency.
              </p>
              
              <p>
                What started as a personal challenge has grown into a <strong>community-driven initiative</strong> 
                with {stats.contributors}+ contributors from around the world. Each day brings new learning, 
                new code, and new opportunities to grow as a developer.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">🎯 Challenge Goals:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Master HTML, CSS & JavaScript fundamentals
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Build real-world frontend projects
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Improve GitHub contribution consistency
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Prepare for Open Source, Internships & GSoC
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Build a strong developer portfolio
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">📊 Repository Stats:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <strong>Languages:</strong> HTML 38.8%, CSS 33.4%, JS 27.8%
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <strong>Projects:</strong> {stats.projects}+ and counting
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <strong>License:</strong> MIT License
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                      <strong>Website:</strong> 100days-progress-tracker.netlify.app
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Challenge Journey
          </h2>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-8">
              {[
                { 
                  year: "Day 1-30", 
                  event: "Beginner Projects", 
                  description: "Personal Portfolio, Todo List, Calculator, Weather App, etc.",
                  icon: <BookOpen className="w-5 h-5" />,
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  year: "Day 31-60", 
                  event: "Intermediate Projects", 
                  description: "Job Board, Social Media Dashboard, E-commerce, Chat Apps, etc.",
                  icon: <Code2 className="w-5 h-5" />,
                  color: "from-green-500 to-emerald-500"
                },
                { 
                  year: "Day 61-90", 
                  event: "Advanced Projects", 
                  description: "Full Stack Apps, Real-time Collaboration, AI Integration, etc.",
                  icon: <Zap className="w-5 h-5" />,
                  color: "from-purple-500 to-pink-500"
                },
                { 
                  year: "Day 91-100", 
                  event: "Capstone Projects", 
                  description: "Enterprise Applications, Microservices, Master Projects",
                  icon: <Trophy className="w-5 h-5" />,
                  color: "from-orange-500 to-amber-500"
                },
                { 
                  year: "Beyond 100", 
                  event: "Open Source & Career", 
                  description: "Contributions to major projects, internships, and job placements",
                  icon: <Award className="w-5 h-5" />,
                  color: "from-red-500 to-pink-500"
                },
              ].map((item, index) => (
                <div
                  key={item.year}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-6"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} border-4 border-background transform -translate-x-1/2 z-10 hidden md:block`}></div>
                  
                  {/* Left side for even, right side for odd */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="flex items-center gap-3 md:flex-row-reverse">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-primary mb-1">{item.year}</div>
                        <h3 className="font-bold text-lg mb-1">{item.event}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty div for spacing */}
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Repository Structure */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary/5 to-purple-600/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">📁 Repository Structure</h2>
              <div className="bg-background/50 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-muted-foreground">
{`100-days-web-projects/
├── 📁 README.md                           # Main project overview
├── 📁 progress-tracker.md                 # Check off completed projects
├── 📁 resources.md                        # Learning resources
├── 📁 BEGINNER (Days 1-30)                # Basic Projects
├── 📁 INTERMEDIATE (Days 31-60)           # Intermediate Projects
├── 📁 ADVANCED (Days 61-90)               # Advanced Projects
├── 📁 CAPSTONE (Days 91-100)              # Final Projects
├── 📁 templates/                          # Reusable templates
├── 📁 assets/                             # Shared assets
└── 📁 tools/                              # Development tools`}
                </pre>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Each folder contains daily projects with complete source code and documentation
                </p>
                <Button onClick={openGitHub} variant="outline" className="gap-2">
                  <Github className="w-4 h-4" />
                  Explore Full Structure on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Ready to Join the Challenge?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're just starting out or looking to level up your skills, 
            the 100 Days Challenge provides structure, community, and real projects to build your portfolio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-primary to-purple-600"
              onClick={openGitHub}
            >
              <Github className="w-5 h-5" />
              Star the Repository
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-primary/30"
              onClick={openDiscord}
            >
              <Users className="w-5 h-5" />
              Join Discord Community
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-green-500/30"
              onClick={openProgressTracker}
            >
              <TrendingUp className="w-5 h-5" />
              Track Progress
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;