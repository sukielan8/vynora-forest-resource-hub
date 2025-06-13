
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
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=250&fit=crop",
      link: "/articles/wearable-biosensors"
    },
    {
      id: 2,
      title: "Scalpel, Stream, Success: How Robotics and Remote Surgery Are Reprogramming the Operating Room",
      date: "May 23, 2025",
      description: "Imagine a surgeon in New York performing a delicate spinal operation on a patient in Nairobi — in real time. This is the cutting edge of remote surgery.",
      category: "AI in Healthcare",
      readTime: "14 min read",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=250&fit=crop",
      link: "/articles/remote-surgery"
    },
    {
      id: 3,
      title: "The Algorithmic Cure: How AI is Redesigning Drug Discovery from Code to Cure",
      date: "May 9, 2025",
      description: "Computational models that can design, test, and optimize new medicines faster, cheaper, and more accurately than ever before. Welcome to the future of pharmacology.",
      category: "AI in Healthcare",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop",
      link: "/articles/algorithmic-cure"
    },
    {
      id: 4,
      title: "Decoding the Mind: How Algorithms Are Listening to Save Lives",
      date: "April 25, 2025",
      description: "Natural Language Processing is transforming mental health care, detecting distress, depression, and suicide risk through patterns in speech and text.",
      category: "AI in Healthcare",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      link: "/articles/mental-health-nlp"
    },
    {
      id: 5,
      title: "Rebuilding the Human Body: The Rise of Smart Prosthetics and Code-Driven Rehabilitation",
      date: "April 11, 2025",
      description: "AI-powered prosthetics and algorithm-driven physical therapy are revolutionizing how we restore movement, independence, and quality of life.",
      category: "Biotech Innovations",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      link: "/articles/smart-prosthetics"
    },
    {
      id: 6,
      title: "Digital Foresight: How Code is Catching Outbreaks Before They Happen",
      date: "March 28, 2025",
      description: "Computer science is transforming how we detect, track, and prevent disease outbreaks — sometimes before a single diagnosis is made.",
      category: "Research Tools",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
      link: "/articles/outbreak-prediction"
    },
    {
      id: 7,
      title: "Code in the Operating Room: How Algorithms Are Reshaping Modern Surgery",
      date: "March 14, 2025",
      description: "Artificial intelligence is now embedded in the very fabric of modern surgery, guiding scalpels, interpreting scans, and preventing errors.",
      category: "AI in Healthcare",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=250&fit=crop",
      link: "/articles/ai-surgery"
    },
    {
      id: 8,
      title: "Decoding the Mind: How Algorithms Are Advancing the Fight Against Alzheimer's",
      date: "February 28, 2025",
      description: "Machine learning is uncovering subtle biomarkers in speech, gait, and brain activity to detect neurodegenerative diseases before symptoms appear.",
      category: "AI in Healthcare",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=250&fit=crop",
      link: "/articles/alzheimers-ai"
    },
    {
      id: 9,
      title: "Rewriting the Heartbeat: How Code Is Saving Lives in Cardiovascular Medicine",
      date: "February 14, 2025",
      description: "Computer science is transforming cardiovascular medicine, from detecting heart rhythms to predicting cardiac events before they happen.",
      category: "AI in Healthcare",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=250&fit=crop",
      link: "/articles/cardiovascular-ai"
    },
    {
      id: 10,
      title: "Precision, Not Guesswork: How Algorithms Are Revolutionizing Cancer Detection",
      date: "January 31, 2025",
      description: "AI is becoming one of oncology's most powerful allies, detecting cancer patterns too subtle for even the most trained human eye.",
      category: "AI in Healthcare",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=250&fit=crop",
      link: "/articles/cancer-detection-ai"
    },
    {
      id: 11,
      title: "Signal in the Silence: How Code is Cracking the Mental Health Crisis",
      date: "January 17, 2025",
      description: "Artificial intelligence and machine learning are giving medicine new ways to understand the mind by identifying patterns in speech and behavior.",
      category: "AI in Healthcare",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      link: "/articles/mental-health-ai"
    },
    {
      id: 12,
      title: "Encoded Pulse: How AI and Algorithms Are Quietly Preventing the Next Heart Attack",
      date: "January 3, 2025",
      description: "A single ECG reading may soon predict your long-term heart health so accurately that doctors can act before symptoms emerge.",
      category: "AI in Healthcare",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop",
      link: "/articles/heart-attack-prediction"
    },
    {
      id: 13,
      title: "Reprogramming Healthcare: How Computer Science is Quietly Redefining Medicine",
      date: "December 20, 2024",
      description: "From the hospital room to the research lab, algorithms and artificial intelligence are becoming the new instruments of healing.",
      category: "AI in Healthcare",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      link: "/articles/cs-redefining-medicine"
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
      <section className="py-12 bg-green-50">
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
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
                  alt="Health Habit Tracker"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                    Coming Soon
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
                  src="https://images.unsplash.com/photo-1559159663-3670c2428a47?w=400&h=250&fit=crop"
                  alt="Intro to AI in Medicine"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                    In Progress
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
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium">
                    Planning
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
                    <Button asChild variant="ghost" size="sm" className="text-xs group-hover:text-primary transition-all duration-300 hover:bg-primary/10">
                      <Link to={article.link}>
                        Read Article
                        <ArrowDown className="ml-1 h-3 w-3 rotate-[-90deg]" />
                      </Link>
                    </Button>
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
