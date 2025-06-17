
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const About = () => {
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

  const differentiators = [
    {
      title: "Anonymous & Proud",
      description: "We prove that impact matters more than credentials, age, or recognition. Our work speaks for itself."
    },
    {
      title: "Built From Scratch",
      description: "Everything we create is original, thoughtful, and designed specifically for our community's needs."
    },
    {
      title: "Student-Focused",
      description: "Our content is written for students, not specialists. We make complex topics accessible and engaging."
    },
    {
      title: "Impact Over Numbers",
      description: "We don't chase metrics or followers. We chase usefulness, quality, and real-world impact."
    }
  ];

  const faqs = [
    {
      question: "Who runs Vynorra?",
      answer: "We're two high school students with big ambitions and small egos. One of us loves tech. One of us loves medicine. Together, we build Vynorra."
    },
    {
      question: "Can I join or collaborate?",
      answer: "Not yet — but we may open volunteer opportunities later this year. For now, follow our work and reach out through our contact page if you have ideas or questions."
    },
    {
      question: "Is your content trustworthy?",
      answer: "We don't give medical advice, but we always cite credible sources, peer-reviewed journals, and verified public datasets. We focus on education and accessibility, not diagnosis or treatment."
    },
    {
      question: "Why stay anonymous?",
      answer: "Anonymity proves that good ideas and impactful work matter more than age, credentials, or personal branding. We want our content to be judged on its merit, not our backgrounds."
    },
    {
      question: "How do you fund your work?",
      answer: "Currently, Vynorra is entirely self-funded and volunteer-run. We keep costs minimal and focus on creating value rather than generating revenue."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold mb-6">
            About Vynorra
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Where anonymous innovation meets healthcare transformation
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-semibold text-primary mb-6">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Vynorra is a nonprofit initiative led by two students — one passionate about computer science, the 
                  other about medicine. We stay anonymous to prove that anyone, regardless of age or 
                  background, can build something real and impactful.
                </p>
                <p>
                  Our work lives at the intersection of health and technology, and we believe that by combining 
                  these fields, we can create tools and resources that make a meaningful difference.
                </p>
                <p>
                  We don't chase credentials or recognition. We chase usefulness and impact, proving that 
                  curiosity, code, and care are all you need to make a difference.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-secondary/20 rounded-2xl p-6 flex items-center justify-center h-32">
                  <div className="text-4xl">👥</div>
                </div>
                <div className="bg-secondary/20 rounded-2xl p-6 flex items-center justify-center h-32">
                  <div className="text-4xl">❤️</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-secondary/20 rounded-2xl p-6 flex items-center justify-center h-32">
                  <div className="text-4xl">🎯</div>
                </div>
                <div className="bg-secondary/20 rounded-2xl p-6 flex items-center justify-center h-32">
                  <div className="text-4xl">🛡️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary mb-4">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary mb-4">
              Our Values
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

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default About;
