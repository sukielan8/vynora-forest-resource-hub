
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
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
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      title: "Email Us",
      subtitle: "contact@Vynorra.org",
      description: "General inquiries, collaboration ideas, and feedback",
      detail: "For specific questions or project discussions"
    },
    {
      title: "Quick Message",
      subtitle: "Use the form to reach us",
      description: "For specific questions or project discussions",
      detail: ""
    }
  ];

  const topics = [
    "Questions about our projects or mission",
    "Ideas for collaboration or partnerships", 
    "Feedback on our content or tools",
    "Student perspectives on healthcare technology",
    "Suggestions for new topics or resources"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Have a question or idea? Want to collaborate? We'd love to hear from you. Drop
            us a message and we'll get back to you soon.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-heading font-semibold text-primary">
                Let's Start a Conversation
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-secondary/20 bg-secondary/5">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                          <Send className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-primary">{info.title}</CardTitle>
                          <p className="text-sm font-medium text-primary">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="leading-relaxed">
                        {info.description}
                        {info.detail && <><br />{info.detail}</>}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* What We'd Love to Hear About */}
              <Card className="border-secondary/20 bg-secondary/5">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">What We'd Love to Hear About</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {topics.map((topic, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-secondary-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{topic}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border-secondary/20 bg-secondary/5">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We typically respond within 2-3 business days. Since we're 
                    students, please be patient during exam periods or major 
                    project deadlines.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <Card className="border-0 shadow-sm bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-primary">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary/20">
                          <SelectValue placeholder="Choose a topic..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="student">Student Question</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your question, idea, or how we can help..."
                        rows={5}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full transition-all duration-300 hover:scale-105">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                  
                  <div className="mt-4 text-center">
                    <p className="text-xs text-muted-foreground">
                      We respect your privacy. Your information stays secure and is only 
                      used to respond to your message.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Privacy */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
            Our Commitment to Privacy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            As an anonymous organization, we understand the importance of privacy. We only collect information 
            necessary to respond to your inquiry, and we never share, sell, or misuse your contact details. Your trust 
            matters to us.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
