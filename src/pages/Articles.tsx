
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const articles = [
    {
      id: 1,
      title: "Reprogramming Healthcare: How Computer Science is Quietly Redefining Medicine",
      date: "December 20, 2024",
      description: "In 2024, the world of healthcare is undergoing a radical transformation—one not led by pills or scalpels, but by code. From the hospital room to the research lab, algorithms and artificial intelligence are becoming the new instruments of healing.",
      category: "AI in Healthcare",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Encoded Pulse: How AI and Algorithms Are Quietly Preventing the Next Heart Attack",
      date: "January 3, 2025",
      description: "In 2025, a single ECG reading or chest X‑ray may soon whisper secrets about your long‑term heart health—so accurately that doctors can act before symptoms even emerge.",
      category: "AI in Healthcare",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Signal in the Silence: How Code is Cracking the Mental Health Crisis",
      date: "January 17, 2025",
      description: "Mental illness doesn't show up on a CT scan. There's no lab result for loneliness, no blood marker for anxiety. And yet, these invisible illnesses claim lives, tear apart families, and burden millions around the world.",
      category: "AI in Healthcare",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Precision, Not Guesswork: How Algorithms Are Revolutionizing Cancer Detection",
      date: "January 31, 2025",
      description: "Cancer doesn't wait. In many cases, neither does it speak loudly until it's too late. That's why today, across the world, researchers are turning to an unexpected tool for answers: code.",
      category: "AI in Healthcare",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Rewriting the Heartbeat: How Code Is Saving Lives in Cardiovascular Medicine",
      date: "February 14, 2025",
      description: "Every second, the human heart sends out a rhythm — a soft electrical whisper that sustains life. But sometimes, the rhythm falters.",
      category: "AI in Healthcare",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Decoding the Mind: How Algorithms Are Advancing the Fight Against Alzheimer's",
      date: "February 28, 2025",
      description: "The brain is humanity's most complex machine — and one of its most vulnerable. As populations age, neurodegenerative diseases like Alzheimer's and Parkinson's are accelerating.",
      category: "AI in Healthcare",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      title: "Code in the Operating Room: How Algorithms Are Reshaping Modern Surgery",
      date: "March 14, 2025",
      description: "In the bright, sterile silence of an operating room, where every second and millimeter can decide the future of a patient's life, a new partner is emerging beside the surgeon: artificial intelligence.",
      category: "AI in Healthcare",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      title: "Digital Foresight: How Code is Catching Outbreaks Before They Happen",
      date: "March 28, 2025",
      description: "Before the first cough is heard. Before hospital beds fill. Before a pandemic becomes a headline — data has already whispered the first warning.",
      category: "Research Tools",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400&h=250&fit=crop"
    },
    {
      id: 9,
      title: "Rebuilding the Human Body: The Rise of Smart Prosthetics and Code-Driven Rehabilitation",
      date: "April 11, 2025",
      description: "The human body was never meant to be perfect — but it was meant to adapt. Today, thanks to breakthroughs in computer science and biomedical engineering, that adaptation is becoming smarter.",
      category: "Biotech Innovations",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop"
    },
    {
      id: 10,
      title: "Decoding the Mind: How Algorithms Are Listening to Save Lives",
      date: "April 25, 2025",
      description: "Words have weight. They carry our pain, our confusion, our anxiety — often before we're even aware of what's wrong. And now, in an era where computer science meets clinical psychology, those words are being decoded with new precision.",
      category: "AI in Healthcare",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      id: 11,
      title: "Getting Started with Python for Medical Data Analysis",
      date: "February 5, 2025",
      description: "A comprehensive beginner's guide to using Python for analyzing medical datasets, from basic statistics to advanced machine learning applications.",
      category: "CS for Pre-Med",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    },
    {
      id: 12,
      title: "Building Your First Healthcare Chatbot: A Step-by-Step Guide",
      date: "February 18, 2025",
      description: "Learn how to create an intelligent chatbot that can assist with basic medical queries using natural language processing and machine learning.",
      category: "CS for Pre-Med",
      readTime: "18 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    },
    {
      id: 13,
      title: "Essential Programming Languages Every Pre-Med Student Should Know",
      date: "March 1, 2025",
      description: "A comprehensive overview of programming languages that are becoming increasingly important in modern medical practice and research.",
      category: "CS for Pre-Med",
      readTime: "7 min read", 
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "AI in Healthcare", "CS for Pre-Med", "Biotech Innovations", "Research Tools"];

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

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
                variant={category === activeCategory ? "default" : "outline"}
                size="sm"
                className="text-sm transition-all duration-300 hover:scale-105"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
              Featured Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-lift border-0 shadow-sm bg-white transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
                  alt="Health Habit Tracker"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full font-medium">
                    Python & ML
                  </span>
                </div>
                <CardTitle className="text-lg font-heading">Health Habit Tracker</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed mb-4">
                  A daily app that helps users build healthy habits by tracking exercise, sleep, and wellness metrics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift border-0 shadow-sm bg-white transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
                  alt="Intro to AI in Medicine"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full font-medium">
                    Coursework
                  </span>
                </div>
                <CardTitle className="text-lg font-heading">Intro to AI in Medicine</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed mb-4">
                  A free introductory course exploring how artificial intelligence is transforming healthcare and diagnosis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift border-0 shadow-sm bg-white transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop"
                  alt="CS for Future Doctors"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full font-medium">
                    Pre-Med
                  </span>
                </div>
                <CardTitle className="text-lg font-heading">CS for Future Doctors</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed mb-4">
                  A blog exploring how pre-med students can use computer science as a superpower in their medical careers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="hover-lift border-0 shadow-sm bg-white overflow-hidden group transition-all duration-300 hover:shadow-lg">
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
                  <CardTitle className="text-lg font-heading line-clamp-2 group-hover:text-primary transition-colors duration-300">
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
                    <Button variant="ghost" size="sm" className="text-xs group-hover:text-primary transition-all duration-300 hover:bg-primary/10">
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
          <Button variant="outline" size="lg" className="transition-all duration-300 hover:bg-primary hover:text-white">
            Load More Articles
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Articles;
