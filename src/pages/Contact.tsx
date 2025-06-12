
import { useState } from 'react';
import { Mail, Users, BookOpen, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "General Inquiries",
      description: "Questions about our resources or content",
      contact: "hello@vynora.org",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Partnership opportunities and contributions",
      contact: "collaborate@vynora.org",
      color: "text-green-600"
    },
    {
      icon: BookOpen,
      title: "Content Feedback",
      description: "Suggestions and improvements for our articles",
      contact: "feedback@vynora.org",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-primary mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We'd love to hear from you. Whether you have questions, suggestions, or want to collaborate, 
            we're here to connect and support the healthcare technology community.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border-0 shadow-sm bg-white hover-lift">
                <CardHeader className="pb-4">
                  <method.icon className={`h-8 w-8 mx-auto mb-3 ${method.color}`} />
                  <CardTitle className="text-xl font-heading text-primary">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {method.description}
                  </CardDescription>
                  <a
                    href={`mailto:${method.contact}`}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {method.contact}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-sm bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-primary">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-semibold text-primary mb-6">
                  Connect With Us
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Vynora is committed to fostering open communication and collaboration within 
                  the healthcare technology community. We welcome feedback, questions, and 
                  partnership opportunities from students, researchers, and professionals.
                </p>
              </div>

              {/* Response Time */}
              <Card className="border-0 shadow-sm bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-heading text-primary">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">General inquiries:</span>
                      <span className="font-medium">24-48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Content feedback:</span>
                      <span className="font-medium">3-5 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Collaboration requests:</span>
                      <span className="font-medium">1-2 weeks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Abstract Graphic */}
              <div className="bg-secondary/10 rounded-2xl p-8 text-center">
                <svg className="w-32 h-32 mx-auto mb-4 text-primary opacity-20" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="network" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.5"/>
                      <path d="M10,2 L18,10 M10,18 L2,10 M10,2 L2,10 M10,18 L18,10" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#network)"/>
                  <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.6"/>
                  <circle cx="25" cy="25" r="8" fill="currentColor" opacity="0.4"/>
                  <circle cx="75" cy="25" r="8" fill="currentColor" opacity="0.4"/>
                  <circle cx="25" cy="75" r="8" fill="currentColor" opacity="0.4"/>
                  <circle cx="75" cy="75" r="8" fill="currentColor" opacity="0.4"/>
                </svg>
                <p className="text-sm text-muted-foreground">
                  Building connections in healthcare technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
