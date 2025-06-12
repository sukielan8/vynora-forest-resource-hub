
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
      title: "The Pulse of the Future: How Wearable Biosensors Are Rewiring Preventive Medicine",
      date: "June 6, 2025",
      description: "What if your smartwatch knew you were sick before you did? Wearable biosensors, combined with powerful computer science algorithms, are reshaping how we monitor health in real time.",
      category: "AI in Healthcare",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1559159663-3670c2428a47?w=400&h=250&fit=crop",
      link: "/articles/wearable-biosensors"
    },
    {
      id: 2,
      title: "Scalpel, Stream, Success: How Robotics and Remote Surgery Are Reprogramming the Operating Room",
      date: "May 23, 2025",
      description: "Imagine a surgeon in New York performing a delicate spinal operation on a patient in Nairobi — in real time. This is the cutting edge of remote surgery.",
      category: "AI in Healthcare",
      readTime: "14 min read",
      image: "https://images.unsplash.com/photo-1559757175-5dbe4ae54fb2?w=400&h=250&fit=crop",
      link: "/articles/remote-surgery"
    },
    {
      id: 3,
      title: "The Algorithmic Cure: How AI is Redesigning Drug Discovery from Code to Cure",
      date: "May 9, 2025",
      description: "Computational models that can design, test, and optimize new medicines faster, cheaper, and more accurately than ever before. Welcome to the future of pharmacology.",
      category: "AI in Healthcare",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=250&fit=crop",
      link: "/articles/algorithmic-cure"
    },
    {
      id: 4,
      title: "Decoding the Mind: How Algorithms Are Listening to Save Lives",
      date: "April 25, 2025",
      description: "Natural Language Processing is transforming mental health care, detecting distress, depression, and suicide risk through patterns in speech and text.",
      category: "AI in Healthcare",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Rebuilding the Human Body: The Rise of Smart Prosthetics and Code-Driven Rehabilitation",
      date: "April 11, 2025",
      description: "AI-powered prosthetics and algorithm-driven physical therapy are revolutionizing how we restore movement, independence, and quality of life.",
      category: "Biotech Innovations",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Digital Foresight: How Code is Catching Outbreaks Before They Happen",
      date: "March 28, 2025",
      description: "Computer science is transforming how we detect, track, and prevent disease outbreaks — sometimes before a single diagnosis is made.",
      category: "Research Tools",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      title: "Code in the Operating Room: How Algorithms Are Reshaping Modern Surgery",
      date: "March 14, 2025",
      description: "Artificial intelligence is now embedded in the very fabric of modern surgery, guiding scalpels, interpreting scans, and preventing errors.",
      category: "AI in Healthcare",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      title: "Essential Programming Languages Every Pre-Med Student Should Know",
      date: "March 1, 2025",
      description: "A comprehensive overview of programming languages that are becoming increasingly important in modern medical practice and research.",
      category: "CS for Pre-Med",
      readTime: "7 min read", 
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    },
    {
      id: 9,
      title: "Decoding the Mind: How Algorithms Are Advancing the Fight Against Alzheimer's",
      date: "February 28, 2025",
      description: "Machine learning is uncovering subtle biomarkers in speech, gait, and brain activity to detect neurodegenerative diseases before symptoms appear.",
      category: "AI in Healthcare",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1559159663-3670c2428a47?w=400&h=250&fit=crop"
    },
    {
      id: 10,
      title: "Building Your First Healthcare Chatbot: A Step-by-Step Guide",
      date: "February 18, 2025",
      description: "Learn how to create an intelligent chatbot that can assist with basic medical queries using natural language processing and machine learning.",
      category: "CS for Pre-Med",
      readTime: "18 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    },
    {
      id: 11,
      title: "Rewriting the Heartbeat: How Code Is Saving Lives in Cardiovascular Medicine",
      date: "February 14, 2025",
      description: "Computer science is transforming cardiovascular medicine, from detecting heart rhythms to predicting cardiac events before they happen.",
      category: "AI in Healthcare",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=250&fit=crop"
    },
    {
      id: 12,
      title: "Getting Started with Python for Medical Data Analysis",
      date: "February 5, 2025",
      description: "A comprehensive beginner's guide to using Python for analyzing medical datasets, from basic statistics to advanced machine learning applications.",
      category: "CS for Pre-Med",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    },
    {
      id: 13,
      title: "Precision, Not Guesswork: How Algorithms Are Revolutionizing Cancer Detection",
      date: "January 31, 2025",
      description: "AI is becoming one of oncology's most powerful allies, detecting cancer patterns too subtle for even the most trained human eye.",
      category: "AI in Healthcare",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
    },
    {
      id: 14,
      title: "Signal in the Silence: How Code is Cracking the Mental Health Crisis",
      date: "January 17, 2025",
      description: "Artificial intelligence and machine learning are giving medicine new ways to understand the mind by identifying patterns in speech and behavior.",
      category: "AI in Healthcare",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400&h=250&fit=crop"
    },
    {
      id: 15,
      title: "Encoded Pulse: How AI and Algorithms Are Quietly Preventing the Next Heart Attack",
      date: "January 3, 2025",
      description: "A single ECG reading may soon predict your long-term heart health so accurately that doctors can act before symptoms emerge.",
      category: "AI in Healthcare",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      id: 16,
      title: "Reprogramming Healthcare: How Computer Science is Quietly Redefining Medicine",
      date: "December 20, 2024",
      description: "From the hospital room to the research lab, algorithms and artificial intelligence are becoming the new instruments of healing.",
      category: "AI in Healthcare",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
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

      {/* Featured Projects Section */}
      <section className="py-12 bg-secondary/20">
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
                  src="https://images.unsplash.com/photo-1559159663-3670c2428a47?w=400&h=250&fit=crop"
                  alt="Health Habit Tracker"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="bg-secondary/40 text-secondary-foreground px-2 py-1 rounded-full font-medium">
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
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
                  alt="Intro to AI in Medicine"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="bg-secondary/40 text-secondary-foreground px-2 py-1 rounded-full font-medium">
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
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="bg-secondary/40 text-secondary-foreground px-2 py-1 rounded-full font-medium">
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
                    {article.link ? (
                      <Button asChild variant="ghost" size="sm" className="text-xs group-hover:text-primary transition-all duration-300 hover:bg-primary/10">
                        <Link to={article.link}>
                          Read Article
                          <ArrowDown className="ml-1 h-3 w-3 rotate-[-90deg]" />
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm" className="text-xs group-hover:text-primary transition-all duration-300 hover:bg-primary/10">
                        Read Article
                        <ArrowDown className="ml-1 h-3 w-3 rotate-[-90deg]" />
                      </Button>
                    )}
                  </div>
                  {!article.link && (
                    <div className="mt-3 text-center">
                      <span className="text-sm text-muted-foreground italic">Content to be uploaded</span>
                    </div>
                  )}
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
