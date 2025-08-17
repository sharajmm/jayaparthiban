import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Github,
  Dribbble,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_92wsq3c",
        "template_cu4mfhi",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "6zk5BRBjaiuQO-i0y"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "jayaparthiban2006@gmail.com",
      action: "mailto:jayaparthiban2006@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Coimbatore",
      action: null,
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8608448171",
      action: "tel:+918608448171",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/jayaparthiban",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/jayaparthiban",
      color: "hover:text-gray-800",
    },
    {
      icon: Mail,
      name: "Mail",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=jayaparthiban2006@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss design opportunities? I'd
            love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border bg-card shadow-elegant">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-semibold text-card-foreground mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="transition-smooth focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    required
                    className="transition-smooth focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-hero hover:shadow-primary transition-smooth font-heading font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="border-border bg-card shadow-elegant">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold text-card-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="p-3 bg-gradient-hero rounded-lg">
                        <info.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-card-foreground">
                          {info.title}
                        </h4>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border bg-card shadow-elegant">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold text-card-foreground mb-6">
                  Connect With Me
                </h3>

                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-muted rounded-lg transition-smooth hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                      title={social.name}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-accent rounded-xl">
                  <h4 className="font-heading text-lg font-semibold text-accent-foreground mb-2">
                    Ready to Collaborate?
                  </h4>
                  <p className="text-accent-foreground/80 text-sm">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your vision.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
