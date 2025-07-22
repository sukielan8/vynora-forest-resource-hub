
import { Link } from 'react-router-dom';
import { ArrowDown, BookOpen, Calendar, Mail, Users, Shield, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/hooks/useTranslation';

const Home = () => {
  const { t } = useTranslation();

  const featuredResources = [
    {
      title: t('resources.ai.title'),
      description: t('resources.ai.description'),
      icon: "🧠",
      link: "/articles"
    },
    {
      title: t('resources.premed.title'),
      description: t('resources.premed.description'),
      icon: "⚕️",
      link: "/articles"
    },
    {
      title: t('resources.biotech.title'),
      description: t('resources.biotech.description'),
      icon: "🧬",
      link: "/articles"
    },
    {
      title: t('resources.tools.title'),
      description: t('resources.tools.description'),
      icon: "🔬",
      link: "/articles"
    }
  ];

  const latestArticles = [
    { title: "The Pulse of the Future: How Wearable Biosensors Are Rewiring Preventive Medicine", date: "June 6, 2025", link: "/articles/wearable-biosensors" },
    { title: "Scalpel, Stream, Success: How Robotics and Remote Surgery Are Reprogramming the Operating Room", date: "May 23, 2025", link: "/articles/remote-surgery" },
    { title: "The Algorithmic Cure: How AI is Redesigning Drug Discovery from Code to Cure", date: "May 9, 2025", link: "/articles/algorithmic-cure" },
    { title: "Precision, Not Guesswork: How Algorithms Are Revolutionizing Cancer Detection", date: "January 31, 2025", link: "/articles" },
    { title: "Signal in the Silence: How Code is Cracking the Mental Health Crisis", date: "January 17, 2025", link: "/articles" }
  ];

  const impactNumbers = [
    { number: "231", label: "Website Visitors" },
    { number: "2", label: "Projects Launched" },
    { number: "580+", label: "Blog Reads" },
    { number: "12", label: "Workshop Attendees" },
    { number: "46", label: "Tool Downloads" }
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
            {t('home.title')}
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-secondary mb-6 animate-fade-in">
            {t('home.subtitle')}
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            {t('home.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-medium transition-all duration-300 hover:scale-105">
              <Link to="/articles">
                <BookOpen className="mr-2 h-5 w-5" />
                {t('home.explore')}
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-medium transition-all duration-300 hover:scale-105">
              <Link to="/about">
                {t('home.learn')}
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
            {t('home.mission.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('home.mission.description')}
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary mb-4">
              {t('resources.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('resources.description')}
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
                    <Link to={resource.link}>{t('common.explore')}</Link>
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
                {t('articles.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('articles.description')}
              </p>
              <Button asChild variant="outline" className="transition-all duration-300 hover:bg-primary hover:text-white">
                <Link to="/articles">
                  {t('articles.viewAll')}
                  <ArrowDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
                </Link>
              </Button>
            </div>

            <div className="lg:w-1/2">
              <div className="space-y-4">
                {latestArticles.map((article, index) => (
                  <Link
                    key={index}
                    to={article.link}
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

      {/* Stay Connected */}
      <section className="py-16 bg-secondary text-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-4">
            {t('connect.title')}
          </h2>
          <p className="text-lg mb-8 leading-relaxed opacity-90">
            {t('connect.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('common.email')}
              className="bg-white text-primary"
            />
            <Button className="bg-primary text-white hover:bg-primary/90 transition-all duration-300">
              {t('common.subscribe')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
