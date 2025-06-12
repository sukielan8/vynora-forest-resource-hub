
import { Users, BookOpen, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: "🎯",
      title: "Precision",
      description: "We provide accurate, evidence-based resources that bridge theoretical knowledge with practical application."
    },
    {
      icon: "🌱",
      title: "Growth",
      description: "We foster continuous learning and adaptation in the rapidly evolving landscape of healthcare technology."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We believe in the power of interdisciplinary collaboration to solve complex healthcare challenges."
    },
    {
      icon: "🔬",
      title: "Innovation",
      description: "We champion innovative approaches that push the boundaries of what's possible in medical technology."
    }
  ];

  const team = [
    {
      role: "Research Contributors",
      description: "Anonymous researchers and practitioners contributing cutting-edge insights from academia and industry.",
      icon: "👥"
    },
    {
      role: "Content Curators",
      description: "Specialists ensuring the quality and relevance of our educational materials and resources.",
      icon: "📝"
    },
    {
      role: "Technical Reviewers",
      description: "Experienced professionals validating the accuracy and applicability of our technical content.",
      icon: "🔍"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-primary mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Vynora exists to bridge the gap between computer science and healthcare, 
            providing comprehensive resources for students, researchers, and professionals 
            at the intersection of technology and medicine.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-semibold text-primary mb-4">
                  What We Do
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We curate and create high-quality educational content that helps students navigate 
                  the complex intersection of computer science and healthcare. Our resources span 
                  from fundamental programming concepts for pre-med students to advanced AI applications 
                  in clinical settings.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through carefully researched articles, practical guides, and cutting-edge insights, 
                  we empower the next generation of healthcare technologists to make meaningful 
                  contributions to human health and wellbeing.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a future where technology and healthcare are seamlessly integrated, 
                  where computational approaches enhance human health outcomes, and where the next 
                  generation of medical professionals are equipped with both clinical expertise 
                  and technological fluency.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-secondary/10 rounded-2xl p-8 relative overflow-hidden">
                {/* Abstract DNA/Circuit pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200">
                  <defs>
                    <pattern id="dna-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M10,10 Q20,5 30,10 Q20,15 10,10" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M10,30 Q20,25 30,30 Q20,35 10,30" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <line x1="10" y1="10" x2="10" y2="30" stroke="currentColor" strokeWidth="0.5"/>
                      <line x1="30" y1="10" x2="30" y2="30" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dna-pattern)" className="text-primary"/>
                </svg>
                
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">🧬</div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Interdisciplinary Excellence
                  </h3>
                  <p className="text-muted-foreground">
                    Where computational thinking meets medical innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our mission and shape our approach to education and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-sm bg-white">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <CardTitle className="text-xl font-heading text-primary">{value.title}</CardTitle>
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

      {/* Team/Contributors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary mb-4">
              Our Contributors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vynora is powered by anonymous contributors from academia, industry, and research institutions 
              who share our vision of advancing healthcare through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-sm bg-white hover-lift">
                <CardHeader className="pb-4">
                  <div className="text-5xl mb-4">{member.icon}</div>
                  <CardTitle className="text-xl font-heading text-primary">{member.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Whether you're a student, researcher, or professional, there are many ways to engage 
            with our community and contribute to the future of healthcare technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
              <BookOpen className="h-5 w-5" />
              <span>Explore our resources</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
              <Users className="h-5 w-5" />
              <span>Connect with our community</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
              <Mail className="h-5 w-5" />
              <span>Share your insights</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
