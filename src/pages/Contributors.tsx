"use client";

import { useState, useEffect } from "react";
import { Github, Users, Calendar, Star, Code, TrendingUp, Zap, MapPin, Building, ExternalLink, GitMerge, GitPullRequest, GitCommit, Trophy, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Contributor {
  id: number;
  name: string;
  username: string;
  avatar: string;
  role: string;
  contributions: number;
  commits: number;
  pullRequests: number;
  linesAdded: number;
  linesDeleted: number;
  profileUrl: string;
  location?: string;
  company?: string;
  followers: number;
  following: number;
  publicRepos: number;
  lastContribution: string;
  rank: number;
  isAdmin?: boolean;
}

const Contributors = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  
  // Based on the data you provided from GitHub
  const ALL_CONTRIBUTORS = [
    {
      id: 1,
      name: "Shubham Cyber Prog",
      username: "Shubham-cyber-prog",
      avatar: "https://avatars.githubusercontent.com/u/Shubham-cyber-prog?v=4",
      contributions: 342,
      commits: 30,
      pullRequests: 15,
      linesAdded: 1636,
      linesDeleted: 7220,
      role: "Project Admin",
      isAdmin: true,
      followers: 150,
      following: 50,
      publicRepos: 35,
      location: "India",
      company: "ECWoC26",
      lastContribution: "4 hours ago"
    },
    {
      id: 2,
      name: "Ubanand",
      username: "ubanand36",
      avatar: "https://avatars.githubusercontent.com/u/ubanand36?v=4",
      contributions: 156,
      commits: 3,
      pullRequests: 2,
      linesAdded: 660,
      linesDeleted: 245,
      role: "Core Maintainer",
      followers: 45,
      following: 23,
      publicRepos: 15,
      location: "India",
      lastContribution: "yesterday"
    },
    {
      id: 3,
      name: "GitHub Copilot",
      username: "copilot",
      avatar: "https://avatars.githubusercontent.com/u/copilot?v=4",
      contributions: 134,
      commits: 3,
      pullRequests: 3,
      linesAdded: 13,
      linesDeleted: 10,
      role: "AI Assistant",
      followers: 0,
      following: 0,
      publicRepos: 0,
      lastContribution: "4 hours ago"
    },
    {
      id: 4,
      name: "Gaurav Karakoti",
      username: "GauravKarakoti",
      avatar: "https://avatars.githubusercontent.com/u/GauravKarakoti?v=4",
      contributions: 98,
      commits: 3,
      pullRequests: 1,
      linesAdded: 790,
      linesDeleted: 49,
      role: "Lead Developer",
      followers: 32,
      following: 18,
      publicRepos: 12,
      location: "India",
      lastContribution: "1 day ago"
    },
    {
      id: 5,
      name: "Kavya Trivedi",
      username: "trivedikavya",
      avatar: "https://avatars.githubusercontent.com/u/trivedikavya?v=4",
      contributions: 87,
      commits: 3,
      pullRequests: 1,
      linesAdded: 387,
      linesDeleted: 13,
      role: "Active Contributor",
      followers: 28,
      following: 15,
      publicRepos: 10,
      location: "India",
      lastContribution: "yesterday"
    },
    {
      id: 6,
      name: "Bikram",
      username: "CodewithBikram2025",
      avatar: "https://avatars.githubusercontent.com/u/CodewithBikram2025?v=4",
      contributions: 65,
      commits: 2,
      pullRequests: 1,
      linesAdded: 383,
      linesDeleted: 195,
      role: "Contributor",
      followers: 25,
      following: 12,
      publicRepos: 8,
      location: "India",
      lastContribution: "3 days ago"
    },
    {
      id: 7,
      name: "Mayank",
      username: "Mayankvya",
      avatar: "https://avatars.githubusercontent.com/u/Mayankvya?v=4",
      contributions: 45,
      commits: 2,
      pullRequests: 1,
      linesAdded: 164,
      linesDeleted: 0,
      role: "Contributor",
      followers: 22,
      following: 10,
      publicRepos: 7,
      location: "India",
      lastContribution: "yesterday"
    },
    {
      id: 8,
      name: "Pranjal Khairnar",
      username: "PRANJALKHAIRNAR07",
      avatar: "https://avatars.githubusercontent.com/u/PRANJALKHAIRNAR07?v=4",
      contributions: 38,
      commits: 2,
      pullRequests: 1,
      linesAdded: 7,
      linesDeleted: 6,
      role: "Contributor",
      followers: 20,
      following: 8,
      publicRepos: 6,
      location: "India",
      lastContribution: "yesterday"
    },
    {
      id: 9,
      name: "Aditya",
      username: "Aditya8369",
      avatar: "https://avatars.githubusercontent.com/u/Aditya8369?v=4",
      contributions: 35,
      commits: 2,
      pullRequests: 1,
      linesAdded: 9,
      linesDeleted: 4,
      role: "Contributor",
      followers: 18,
      following: 7,
      publicRepos: 5,
      location: "India",
      lastContribution: "yesterday"
    },
    {
      id: 10,
      name: "Akshat Raval",
      username: "AkshatRaval",
      avatar: "https://avatars.githubusercontent.com/u/AkshatRaval?v=4",
      contributions: 32,
      commits: 2,
      pullRequests: 1,
      linesAdded: 597,
      linesDeleted: 0,
      role: "Contributor",
      followers: 30,
      following: 15,
      publicRepos: 10,
      location: "India",
      lastContribution: "yesterday"
    },
    {
      id: 11,
      name: "Srimadhuri",
      username: "srimadhuri18",
      avatar: "https://avatars.githubusercontent.com/u/srimadhuri18?v=4",
      contributions: 28,
      commits: 2,
      pullRequests: 1,
      linesAdded: 424,
      linesDeleted: 0,
      role: "New Contributor",
      followers: 15,
      following: 5,
      publicRepos: 4,
      location: "India",
      lastContribution: "yesterday"
    },
    {
      id: 12,
      name: "Jidnyasa",
      username: "Jidnyasa-P",
      avatar: "https://avatars.githubusercontent.com/u/Jidnyasa-P?v=4",
      contributions: 25,
      commits: 2,
      pullRequests: 1,
      linesAdded: 443,
      linesDeleted: 0,
      role: "New Contributor",
      followers: 12,
      following: 4,
      publicRepos: 3,
      location: "India",
      lastContribution: "yesterday"
    },
    {
      id: 13,
      name: "Purnagya",
      username: "Purnagya08",
      avatar: "https://avatars.githubusercontent.com/u/Purnagya08?v=4",
      contributions: 22,
      commits: 2,
      pullRequests: 1,
      linesAdded: 169,
      linesDeleted: 2,
      role: "New Contributor",
      followers: 10,
      following: 3,
      publicRepos: 2,
      location: "India",
      lastContribution: "yesterday"
    },
    {
      id: 14,
      name: "Squirrel",
      username: "squirrelk6755-ctrl",
      avatar: "https://avatars.githubusercontent.com/u/squirrelk6755-ctrl?v=4",
      contributions: 18,
      commits: 1,
      pullRequests: 1,
      linesAdded: 445,
      linesDeleted: 0,
      role: "First-time Contributor",
      followers: 8,
      following: 2,
      publicRepos: 1,
      lastContribution: "yesterday"
    },
    {
      id: 15,
      name: "Divya",
      username: "Divya-199171",
      avatar: "https://avatars.githubusercontent.com/u/Divya-199171?v=4",
      contributions: 15,
      commits: 1,
      pullRequests: 1,
      linesAdded: 222,
      linesDeleted: 0,
      role: "First-time Contributor",
      followers: 6,
      following: 1,
      publicRepos: 1,
      location: "India",
      lastContribution: "yesterday"
    },
    {
      id: 16,
      name: "GitHub Security",
      username: "github-advanced-security",
      avatar: "https://avatars.githubusercontent.com/u/github-advanced-security?v=4",
      contributions: 12,
      commits: 1,
      pullRequests: 1,
      linesAdded: 20,
      linesDeleted: 8,
      role: "Security Bot",
      followers: 0,
      following: 0,
      publicRepos: 0,
      lastContribution: "yesterday"
    },
    {
      id: 17,
      name: "Muhammad Luqman",
      username: "MuhammadLuqman0407",
      avatar: "https://avatars.githubusercontent.com/u/MuhammadLuqman0407?v=4",
      contributions: 10,
      commits: 1,
      pullRequests: 1,
      linesAdded: 5482,
      linesDeleted: 0,
      role: "First-time Contributor",
      followers: 25,
      following: 10,
      publicRepos: 5,
      location: "Pakistan",
      lastContribution: "yesterday"
    },
    {
      id: 18,
      name: "ImgBot",
      username: "ImgBotApp",
      avatar: "https://avatars.githubusercontent.com/u/ImgBotApp?v=4",
      contributions: 8,
      commits: 1,
      pullRequests: 1,
      linesAdded: 0,
      linesDeleted: 0,
      role: "Optimization Bot",
      followers: 0,
      following: 0,
      publicRepos: 0,
      lastContribution: "yesterday"
    },
    {
      id: 19,
      name: "Sejal",
      username: "Sejal-collection",
      avatar: "https://avatars.githubusercontent.com/u/Sejal-collection?v=4",
      contributions: 6,
      commits: 1,
      pullRequests: 1,
      linesAdded: 50,
      linesDeleted: 107,
      role: "First-time Contributor",
      followers: 4,
      following: 1,
      publicRepos: 1,
      location: "India",
      lastContribution: "yesterday"
    },
    {
      id: 20,
      name: "Inkesk Dozing",
      username: "Inkesk-Dozing",
      avatar: "https://avatars.githubusercontent.com/u/Inkesk-Dozing?v=4",
      contributions: 5,
      commits: 1,
      pullRequests: 1,
      linesAdded: 124,
      linesDeleted: 0,
      role: "First-time Contributor",
      followers: 3,
      following: 1,
      publicRepos: 1,
      lastContribution: "yesterday"
    },
    {
      id: 21,
      name: "Sohan Jadyal",
      username: "sohanjadyal",
      avatar: "https://avatars.githubusercontent.com/u/sohanjadyal?v=4",
      contributions: 4,
      commits: 1,
      pullRequests: 1,
      linesAdded: 211,
      linesDeleted: 0,
      role: "First-time Contributor",
      followers: 2,
      following: 1,
      publicRepos: 1,
      location: "India",
      lastContribution: "yesterday"
    },
    {
      id: 22,
      name: "Bug Vixen",
      username: "bugVixen-M",
      avatar: "https://avatars.githubusercontent.com/u/bugVixen-M?v=4",
      contributions: 2,
      commits: 1,
      pullRequests: 1,
      linesAdded: 8,
      linesDeleted: 0,
      role: "First-time Contributor",
      followers: 1,
      following: 0,
      publicRepos: 0,
      lastContribution: "yesterday"
    }
  ];

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      // Sort by contributions (highest first) and assign ranks
      const sortedContributors = [...ALL_CONTRIBUTORS]
        .sort((a, b) => b.contributions - a.contributions)
        .map((contributor, index) => ({
          ...contributor,
          rank: index + 1,
          profileUrl: `https://github.com/${contributor.username}`
        }));
      
      setContributors(sortedContributors);
      setLoading(false);
    }, 1000);
  }, []);

  const getTotalStats = () => {
    return {
      contributors: contributors.length,
      commits: contributors.reduce((sum, c) => sum + c.commits, 0),
      pullRequests: contributors.reduce((sum, c) => sum + c.pullRequests, 0),
      linesAdded: contributors.reduce((sum, c) => sum + c.linesAdded, 0),
      linesDeleted: contributors.reduce((sum, c) => sum + c.linesDeleted, 0)
    };
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "🏆";
    if (rank <= 3) return "🥈";
    if (rank <= 10) return "🥉";
    return `#${rank}`;
  };

  const getProgressValue = (contributor: Contributor) => {
    const totalLines = contributor.linesAdded + contributor.linesDeleted;
    if (totalLines === 0) return 0;
    return (contributor.linesAdded / totalLines) * 100;
  };

  const filteredContributors = contributors.filter(contributor => {
    if (activeTab === "all") return true;
    if (activeTab === "admin") return contributor.isAdmin;
    if (activeTab === "core") return contributor.role.includes("Core") || contributor.role.includes("Lead") || contributor.role.includes("Maintainer");
    if (activeTab === "active") return contributor.contributions > 10;
    if (activeTab === "new") return contributor.role.includes("New") || contributor.role.includes("First-time");
    if (activeTab === "bots") return contributor.role.includes("Bot") || contributor.role.includes("AI");
    return true;
  });

  const totalStats = getTotalStats();

  if (loading) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-6" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {[1, 2, 3, 4, 5].map(i => (
              <Skeleton key={i} className="h-32 rounded-2xl" />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <Skeleton key={i} className="h-64 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              100 Days Challenge Contributors
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Meet the amazing developers who contributed to our 100 Days of Web Development challenge!
              <br />A total of <span className="font-bold text-primary">{totalStats.contributors}</span> contributors made this project possible.
            </p>
            
            {/* Repository Info */}
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 mb-8">
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-primary" />
                <span className="font-medium">Shubham-cyber-prog/100-Days-Of-Web-Development-ECWoC26</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>45+</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitMerge className="w-4 h-4 text-green-500" />
                  <span>22+</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitPullRequest className="w-4 h-4 text-blue-500" />
                  <span>{totalStats.pullRequests}+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/20 border-primary/20">
              <CardHeader className="p-6 pb-2">
                <div className="text-3xl font-bold text-primary mb-2">{totalStats.contributors}</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  Contributors
                </div>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-500/5 to-blue-500/20 border-blue-500/20">
              <CardHeader className="p-6 pb-2">
                <div className="text-3xl font-bold text-blue-500 mb-2">{totalStats.commits}</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <GitCommit className="w-4 h-4" />
                  Total Commits
                </div>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500/5 to-green-500/20 border-green-500/20">
              <CardHeader className="p-6 pb-2">
                <div className="text-3xl font-bold text-green-500 mb-2">{totalStats.pullRequests}</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <GitPullRequest className="w-4 h-4" />
                  Merged PRs
                </div>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-500/5 to-purple-500/20 border-purple-500/20">
              <CardHeader className="p-6 pb-2">
                <div className="text-3xl font-bold text-purple-500 mb-2">
                  {totalStats.linesAdded.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Lines Added
                </div>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-pink-500/5 to-pink-500/20 border-pink-500/20">
              <CardHeader className="p-6 pb-2">
                <div className="text-3xl font-bold text-pink-500 mb-2">
                  {totalStats.linesDeleted.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <Code className="w-4 h-4" />
                  Lines Deleted
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <TabsList className="flex-wrap h-auto bg-secondary/50">
                  <TabsTrigger value="all">All Contributors ({contributors.length})</TabsTrigger>
                  <TabsTrigger value="admin">Project Admin</TabsTrigger>
                  <TabsTrigger value="core">Core Team</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="new">New Contributors</TabsTrigger>
                  <TabsTrigger value="bots">Bots</TabsTrigger>
                </TabsList>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Real-time data from GitHub</span>
                </div>
              </div>
            </Tabs>
          </div>

          {/* Contributors Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredContributors.map((contributor) => (
              <Card 
                key={contributor.id}
                className="group cursor-pointer hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-card to-card/80 border border-border/50 hover:border-primary/30 hover:shadow-xl"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-16 h-16 border-2 border-border group-hover:border-primary transition-colors">
                          <AvatarImage 
                            src={contributor.avatar} 
                            alt={contributor.name}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://ui-avatars.com/api/?name=${contributor.username}&background=random&color=fff&bold=true`;
                            }}
                          />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white">
                            {contributor.username.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        {contributor.isAdmin && (
                          <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 border-0">
                            <Shield className="w-3 h-3 mr-1" />
                            Admin
                          </Badge>
                        )}
                        {contributor.rank <= 3 && (
                          <div className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                            {contributor.rank}
                          </div>
                        )}
                      </div>
                      <div className="max-w-[calc(100%-80px)]">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <h3 className="font-semibold text-lg truncate flex items-center gap-2">
                              {contributor.name}
                            </h3>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{contributor.name}</p>
                          </TooltipContent>
                        </Tooltip>
                        <p className="text-sm text-muted-foreground truncate">@{contributor.username}</p>
                        <Badge 
                          variant="secondary" 
                          className="mt-1 truncate max-w-full"
                        >
                          {contributor.role}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-4">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center p-2 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="text-lg font-bold text-primary">{contributor.contributions}</div>
                      <div className="text-xs text-muted-foreground">Contribs</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-blue-500/5 border border-blue-500/10">
                      <div className="text-lg font-bold text-blue-500">{contributor.commits}</div>
                      <div className="text-xs text-muted-foreground">Commits</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-green-500/5 border border-green-500/10">
                      <div className="text-lg font-bold text-green-500">{contributor.pullRequests}</div>
                      <div className="text-xs text-muted-foreground">PRs</div>
                    </div>
                  </div>
                  
                  {/* Additional Info */}
                  <div className="space-y-2 text-sm mb-4">
                    {contributor.location && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{contributor.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">Last: {contributor.lastContribution}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-2 border-t">
                      <span className="text-green-600 font-medium">+{contributor.linesAdded.toLocaleString()}</span>
                      <span className="text-gray-500">|</span>
                      <span className="text-red-600 font-medium">-{contributor.linesDeleted.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  {/* Lines Changed Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-green-600">Lines Added</span>
                      <span className="text-red-600">Lines Deleted</span>
                    </div>
                    <Progress 
                      value={getProgressValue(contributor)} 
                      className="h-2"
                    />
                    <div className="text-center text-xs text-muted-foreground">
                      Rank: {getRankBadge(contributor.rank)}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1 text-sm cursor-help">
                          <Users className="w-4 h-4" />
                          <span className="font-medium">{contributor.followers}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Followers</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1 text-sm cursor-help">
                          <Code className="w-4 h-4" />
                          <span className="font-medium">{contributor.publicRepos}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Public Repositories</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 hover:bg-primary/10 hover:text-primary"
                    onClick={() => window.open(contributor.profileUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-primary/20 mb-12">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary to-purple-600 mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Want to be featured here?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Join our growing community of {totalStats.contributors} developers! 
                Contribute to the 100 Days Challenge and get your contributor card featured on this page.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                  onClick={() => window.open("https://github.com/Shubham-cyber-prog/100-Days-Of-Web-Development-ECWoC26", '_blank')}
                >
                  <Github className="w-5 h-5" />
                  View Repository
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2 border-primary/30 hover:bg-primary/10"
                  onClick={() => window.open("https://github.com/Shubham-cyber-prog/100-Days-Of-Web-Development-ECWoC26/issues", '_blank')}
                >
                  <GitPullRequest className="w-5 h-5" />
                  Find Issues
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Live Status */}
          <div className="text-center text-sm">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-muted-foreground">
                Showing <span className="font-bold text-primary">{contributors.length}</span> contributors • 
                Last updated: Today
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Based on real contribution data from GitHub
            </p>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Contributors;