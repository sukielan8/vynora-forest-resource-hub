
import { Link } from 'react-router-dom';
import { Calendar, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Machine Learning Applications in Radiology",
      date: "March 15, 2024",
      description: "Exploring how deep learning algorithms are revolutionizing medical imaging analysis and diagnostic accuracy.",
      category: "AI in Healthcare",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Pre-Med Students Guide to Programming",
      date: "March 12, 2024",
      description: "Essential programming languages and concepts every pre-med student should master for modern healthcare.",
      category: "CS for Pre-Med",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "CRISPR and Computational Design",
      date: "March 10, 2024",
      description: "How computational tools are advancing gene editing precision and therapeutic applications.",
      category: "Biotech Innovations",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Healthcare Data Analytics Trends",
      date: "March 8, 2024",
      description: "Current trends in healthcare data analysis and their impact on patient outcomes and operational efficiency.",
      category: "Research Tools",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "AI Ethics in Medical Practice",
      date: "March 5, 2024",
      description: "Navigating the ethical considerations of artificial intelligence implementation in clinical settings.",
      category: "AI in Healthcare",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Bioinformatics Career Pathways",
      date: "March 3, 2024",
      description: "Career opportunities and educational requirements in the growing field of bioinformatics.",
      category: "CS for Pre-Med",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      title: "Telemedicine Platform Development",
      date: "March 1, 2024",
      description: "Technical considerations and best practices for building secure telehealth applications.",
      category: "Research Tools",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      title: "Genomic Data Processing Pipelines",
      date: "February 28, 2024",
      description: "Efficient algorithms and tools for processing large-scale genomic datasets in research environments.",
      category: "Biotech Innovations",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=250&fit=crop"
    },
    {
      id: 9,
      title: "Natural Language Processing in EHRs",
      date: "February 26, 2024",
      description: "Extracting insights from electronic health records using advanced NLP techniques and frameworks.",
      category: "AI in Healthcare",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    },
    {
      id: 10,
      title: "Medical Device Software Standards",
      date: "February 24, 2024",
      description: "Understanding regulatory requirements and quality standards for medical device software development.",
      category: "Research Tools",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=250&fit=crop"
    },
    {
      id: 11,
      title: "Drug Discovery with Machine Learning",
      date: "February 22, 2024",
      description: "How ML algorithms are accelerating pharmaceutical research and drug development processes.",
      category: "Biotech Innovations",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=250&fit=crop"
    },
    {
      id: 12,
      title: "Clinical Trial Data Management",
      date: "February 20, 2024",
      description: "Best practices for managing and analyzing clinical trial data using modern computational approaches.",
      category: "Research Tools",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=250&fit=crop"
    },
    {
      id: 13,
      title: "Precision Medicine and Personalized Care",
      date: "February 18, 2024",
      description: "The role of computational biology in advancing personalized treatment strategies and patient care.",
      category: "AI in Healthcare",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "AI in Healthcare", "CS for Pre-Med", "Biotech Innovations", "Research Tools"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-primary mb-6">
              Articles & Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of articles covering the intersection of computer science and healthcare. 
              From technical tutorials to research insights.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="hover-lift border-0 shadow-sm bg-white overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg font-heading line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs group-hover:text-primary">
                      Read Article
                      <ArrowDown className="ml-1 h-3 w-3 rotate-[-90deg]" />
                    </Button>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-sm text-muted-foreground italic">Content to be uploaded</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Articles;
