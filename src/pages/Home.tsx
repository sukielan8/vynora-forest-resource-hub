
import { Link } from 'react-router-dom';
import { ArrowDown, BookOpen, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    { title: "Machine Learning Applications in Radiology", date: "March 15, 2024" },
    { title: "Pre-Med Students Guide to Programming", date: "March 12, 2024" },
    { title: "CRISPR and Computational Design", date: "March 10, 2024" },
    { title: "Healthcare Data Analytics Trends", date: "March 8, 2024" },
    { title: "AI Ethics in Medical Practice", date: "March 5, 2024" }
  ];

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-white mb-6 animate-fade-in">
            Where Computer Science
            <span className="block text-secondary">Meets Healthcare</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Discover comprehensive resources for the intersection of technology and medicine. 
            From AI applications to pre-med programming guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-medium">
              <Link to="/articles">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Resources
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/about">
                Learn About Vynora
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/60" />
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-muted/30">
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
              <Card key={index} className="hover-lift border-0 shadow-sm bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-3">{resource.icon}</div>
                  <CardTitle className="text-xl font-heading text-primary">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {resource.description}
                  </CardDescription>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={resource.link}>Explore</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
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
              <Button asChild variant="outline">
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
                    className="block p-4 rounded-lg border border-border hover:border-secondary hover:bg-secondary/5 transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <ArrowDown className="h-4 w-4 rotate-[-90deg] text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
