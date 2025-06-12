import { Link } from 'react-router-dom';
import { ArrowDown, BookOpen, Calendar, Mail, Users, Shield, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Home = () => {
  const featuredResources = [
    {
      title: "AI in Healthcare",
      description: "Explore cutting-edge applications of artificial intelligence in medical diagnosis and treatment.",
      icon: "🧠",
      link: "/articles"
    },
    {
      title: "CS for Pre-Med",
      description: "Bridge computer science and medicine with our comprehensive academic guidance.",
      icon: "⚕️",
      link: "/articles"
    },
    {
      title: "Biotech Innovations",
      description: "Stay updated on the latest breakthroughs in biotechnology and computational biology.",
      icon: "🧬",
      link: "/articles"
    },
    {
      title: "Research Tools",
      description: "Access essential tools and methodologies for interdisciplinary research.",
      icon: "🔬",
      link: "/articles"
    }
  ];

  const latestArticles = [
    { title: "Reprogramming Healthcare: How Computer Science is Quietly Redefining Medicine", date: "December 20, 2024" },
    { title: "Encoded Pulse: How AI and Algorithms Are Quietly Preventing the Next Heart Attack", date: "January 3, 2025" },
    { title: "Signal in the Silence: How Code is Cracking the Mental Health Crisis", date: "January 17, 2025" },
    { title: "Precision, Not Guesswork: How Algorithms Are Revolutionizing Cancer Detection", date: "January 31, 2025" },
    { title: "Rewriting the Heartbeat: How Code Is Saving Lives in Cardiovascular Medicine", date: "February 14, 2025" }
  ];

  const coreValues = [
    {
      icon: "🌿",
      title: "Access",
      description: "Health and tech knowledge for everyone"
    },
    {
      icon: "⚡",
      title: "Innovation", 
      description: "Practical, creative solutions"
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Learn by building, teach by sharing"
    },
    {
      icon: "🔒",
      title: "Anonymity",
      description: "Work matters more than names"
    },
    {
      icon: "👁️",
      title: "Transparency",
      description: "Open and trackable progress"
    }
  ];

  const impactNumbers = [
    { number: "231", label: "Website Visitors" },
    { number: "2", label: "Projects Launched" },
    { number: "580+", label: "Blog Reads" },
    { number: "12", label: "Workshop Attendees" },
    { number: "46", label: "Tool Downloads" }
  ];

  const howWeWork = [
    {
      number: "1",
      title: "Discover Opportunities",
      description: "We identify gaps where technology can improve healthcare accessibility and education."
    },
    {
      number: "2", 
      title: "Collaborate Anonymously",
      description: "Our anonymous approach proves that impact matters more than credentials or recognition."
    },
    {
      number: "3",
      title: "Drive Impact",
      description: "We create open-source tools and educational content that benefit students and communities."
    }
  ];

  const scrollToContent = () => {
    const nextSection = document.getElementById('core-mission');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] hero-gradient flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" opacity="0.3"/>
                <path d="M2,2 L18,2 M2,2 L2,18" stroke="white" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-white mb-2 animate-fade-in">
            Vynora
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-secondary mb-6 animate-fade-in">
            Where Computer Science
            <span className="block text-secondary">Meets Healthcare</span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Discover comprehensive resources for the intersection of technology and medicine. 
            From AI applications to pre-med programming guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-medium transition-all duration-300 hover:scale-105">
              <Link to="/articles">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Resources
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/20 transition-all duration-300 hover:scale-105">
              <Link to="/about">
                Learn About Vynora
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-300 hover:scale-110"
        >
          <ArrowDown className="h-6 w-6 text-white/60 hover:text-white/80" />
        </button>
      </section>

      {/* Core Mission Section */}
      <section id="core-mission" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary mb-6">
            Our Core Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To use technology and creativity to improve access to health knowledge, spark innovation,
            and empower the next generation of students to shape the future of care.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-sm bg-white hover-lift transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <CardTitle className="text-lg font-heading text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Make Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary mb-4">
              How We Make Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWeWork.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Impact */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary mb-4">
              Our Growing Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {impactNumbers.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of resources at the intersection of computer science and healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="hover-lift border-0 shadow-sm bg-white transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-3">{resource.icon}</div>
                  <CardTitle className="text-xl font-heading text-primary">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {resource.description}
                  </CardDescription>
                  <Button asChild variant="outline" size="sm" className="w-full transition-all duration-300 hover:bg-primary hover:text-white">
                    <Link to={resource.link}>Explore</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary mb-6">
                Latest Articles
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Stay updated with the latest insights, research, and developments in healthcare technology. 
                Our articles cover everything from practical programming guides to cutting-edge research analysis.
              </p>
              <Button asChild variant="outline" className="transition-all duration-300 hover:bg-primary hover:text-white">
                <Link to="/articles">
                  View All Articles
                  <ArrowDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
                </Link>
              </Button>
            </div>

            <div className="lg:w-1/2">
              <div className="space-y-4">
                {latestArticles.map((article, index) => (
                  <Link
                    key={index}
                    to="/articles"
                    className="block p-4 rounded-lg border border-border hover:border-secondary hover:bg-secondary/5 transition-all duration-300 group hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {article.title}
                        </h3>
                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <ArrowDown className="h-4 w-4 rotate-[-90deg] text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16 bg-secondary text-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-4">
            Stay Connected
          </h2>
          <p className="text-lg mb-8 leading-relaxed opacity-90">
            Get updates on our latest projects and insights. No spam. Unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-primary"
            />
            <Button className="bg-primary text-white hover:bg-primary/90 transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
