"use client";

import { useState } from "react";
import { Send, Mail, MapPin, MessageSquare, Github, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Using EmailJS for form submission (you'll need to set this up)
      // For now, we'll simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Message Sent Successfully! 🚀",
        description: "Thank you for reaching out! I'll get back to you within 24 hours.",
        variant: "default",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email me directly at sn343555@gmail.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const openDiscord = () => {
    window.open("https://discord.gg/SW7puwEm", "_blank", "noopener,noreferrer");
  };

  const openGitHub = () => {
    window.open("https://github.com/Shubham-cyber-prog", "_blank", "noopener,noreferrer");
  };

  const sendEmail = () => {
    window.location.href = "mailto:sn343555@gmail.com";
  };

  const openLinkedIn = () => {
    window.open("https://linkedin.com/in/shubham-nishad", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Let's <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Connect</span> 🤝
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Got a question, project idea, or just want to chat about web development?
            I'm always excited to connect with fellow developers and creators!
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium">Available for Projects</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
              <span className="text-sm font-medium">Fast Response Time</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
              <span className="text-sm font-medium">Open to Collaboration</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Connect With Me
            </h2>

            <div className="space-y-6 mb-8">
              {/* Email */}
              <Card className="group cursor-pointer hover:border-primary/50 transition-all duration-300" onClick={sendEmail}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">sn343555@gmail.com</p>
                      <p className="text-xs text-muted-foreground mt-2">Click to send email directly</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Discord */}
              <Card className="group cursor-pointer hover:border-purple-500/50 transition-all duration-300" onClick={openDiscord}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-600/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Discord Community</h3>
                      <p className="text-muted-foreground">Join our Web Dev Community</p>
                      <p className="text-xs text-muted-foreground mt-2">Click to join server</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* GitHub */}
              <Card className="group cursor-pointer hover:border-gray-800/50 transition-all duration-300" onClick={openGitHub}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">GitHub</h3>
                      <p className="text-muted-foreground">@Shubham-cyber-prog</p>
                      <p className="text-xs text-muted-foreground mt-2">Check out my projects & contributions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-600/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-pink-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Based In</h3>
                      <p className="text-muted-foreground">India 🇮🇳</p>
                      <p className="text-xs text-muted-foreground mt-2">Open to remote collaboration worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Connect on Social</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary"
                  onClick={openGitHub}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-blue-500/10 hover:text-blue-500"
                  onClick={openLinkedIn}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-purple-500/10 hover:text-purple-500"
                  onClick={openDiscord}
                >
                  <MessageSquare className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-green-500/10 hover:text-green-500"
                  onClick={sendEmail}
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Response Info */}
            <Card className="bg-gradient-to-r from-primary/5 to-purple-600/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Quick Response Time
                </h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond within <span className="font-bold text-primary">12-24 hours</span>.
                  For urgent matters, ping me on Discord or email directly.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Phone className="w-3 h-3" />
                  <span>Available for freelance projects & collaborations</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
              Send a Message
            </h2>
            
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 space-y-6 shadow-lg"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    Your Name
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    Email Address
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  Subject
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry / Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  Your Message
                  <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Hi Shubham, I'd like to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none min-h-[150px]"
                />
              </div>

              <div className="space-y-3">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  By submitting, you agree to receive a response via email. 
                  No spam, guaranteed! ✨
                </p>
              </div>

              <div className="pt-6 border-t border-border/50">
                <h4 className="text-sm font-medium mb-2">Prefer other methods?</h4>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={sendEmail}
                  >
                    Email Directly
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={openDiscord}
                  >
                    Join Discord
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={openGitHub}
                  >
                    View GitHub
                  </Button>
                </div>
              </div>
            </form>

            {/* Success Message Preview */}
            <Card className="mt-6 bg-gradient-to-r from-green-500/5 to-emerald-500/5 border-green-500/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold text-green-600">Success Rate:</span> 100%
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Every message gets a personalized response
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center animate-fade-up">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-3">Looking for Immediate Collaboration?</h3>
              <p className="text-muted-foreground mb-4">
                Join our Discord server for real-time discussions, project collaborations, 
                and web development community.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-600/90 hover:to-indigo-600/90"
                onClick={openDiscord}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Join Discord Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;