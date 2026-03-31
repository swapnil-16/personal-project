import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Brain, Mail, Twitter, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * QuillSpark Landing Page - Soft Modernism with Playful Depth
 * Design System: Lavender (#E6D5F8) + Cream (#F5F3F0) + Midnight Blue (#1A1F3A)
 * Typography: Sora (headlines) + Poppins (body)
 * Key Elements: Neumorphic shadows, rounded corners (20-24px), gradient layers, organic curves
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Welcome to QuillSpark! Check your email for early access.");
      setEmail("");
      setIsSubmitting(false);
    }, 800);
  };

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Writing",
      description: "Generate, refine, and enhance your writing with cutting-edge AI technology.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get instant suggestions and completions to accelerate your creative process.",
    },
    {
      icon: Brain,
      title: "Smart Learning",
      description: "Our AI learns your style and adapts to provide personalized recommendations.",
    },
  ];

  const testimonials = [
    {
      quote: "QuillSpark transformed how I write. It's like having a brilliant editor always by my side.",
      author: "Sarah Chen",
      role: "Content Creator",
    },
    {
      quote: "The quality of suggestions is remarkable. I've never seen an AI writing tool this intuitive.",
      author: "Marcus Johnson",
      role: "Author",
    },
    {
      quote: "As a non-native speaker, QuillSpark helps me write with confidence and clarity.",
      author: "Elena Rodriguez",
      role: "Freelance Writer",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-soft-purple flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-midnight-blue">QuillSpark</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">
              Features
            </a>
            <a href="#product" className="text-sm font-medium hover:text-accent transition-colors">
              Product
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-accent transition-colors">
              Testimonials
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
        {/* Background gradient */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663498114313/DudBu2KYVeDnQ2SvY8cdqv/quillspark-hero-gradient-iNmx76NYgttGiCTgxqjFZv.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/30 to-background" />

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-lavender/50 border border-lavender/30 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-midnight-blue">Introducing QuillSpark</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-midnight-blue mb-6 leading-tight">
              Write Smarter,
              <span className="block bg-gradient-soft-purple bg-clip-text text-transparent">
                Create Faster
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
              QuillSpark is your AI-powered writing companion. Unlock your creativity with intelligent suggestions,
              real-time editing, and personalized insights that adapt to your unique voice.
            </p>

            <form onSubmit={handleSignup} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 rounded-xl bg-white/50 border-lavender/30 placeholder:text-foreground/40 text-midnight-blue"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 px-8 bg-gradient-soft-purple hover:opacity-90 text-white font-semibold rounded-xl transition-all duration-300 neumorphic-shadow"
              >
                {isSubmitting ? "Joining..." : "Get Early Access"}
              </Button>
            </form>

            <p className="text-sm text-foreground/50">Join 5,000+ writers already using QuillSpark</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 bg-light-lavender/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-midnight-blue mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Everything you need to elevate your writing to the next level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-8 rounded-2xl bg-white border-lavender/20 hover:border-lavender/40 transition-all duration-300 neumorphic-shadow hover:shadow-lg group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-soft-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-midnight-blue mb-3">{feature.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Teaser Section */}
      <section id="product" className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-midnight-blue mb-6">
                See QuillSpark in Action
              </h2>
              <p className="text-lg text-foreground/60 mb-6 leading-relaxed">
                Our intuitive interface makes it easy to harness the power of AI. Simply start typing, and let QuillSpark
                suggest improvements in real-time. From grammar to style, we've got you covered.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Real-time AI suggestions",
                  "Multi-language support",
                  "Tone and style customization",
                  "Seamless integrations",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-soft-purple flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="px-8 py-3 bg-midnight-blue hover:bg-midnight-blue/90 text-white font-semibold rounded-xl transition-all duration-300 neumorphic-shadow">
                Learn More
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden neumorphic-shadow">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663498114313/DudBu2KYVeDnQ2SvY8cdqv/quillspark-product-mockup-ZjQMTKC6yjGyoT7vUMtGjY.webp"
                  alt="QuillSpark Product Interface"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-lavender-cream rounded-full opacity-40 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section id="testimonials" className="py-24 md:py-32 bg-light-lavender/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-midnight-blue mb-4">
              Loved by Writers
            </h2>
            <p className="text-lg text-foreground/60">
              Join thousands of writers who are already transforming their craft
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-12 rounded-2xl bg-white border-lavender/20 neumorphic-shadow">
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              <p className="text-xl text-midnight-blue font-medium mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-midnight-blue">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-lavender/20 hover:bg-lavender/40 text-midnight-blue transition-colors flex items-center justify-center"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-lavender/20 hover:bg-lavender/40 text-midnight-blue transition-colors flex items-center justify-center"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentTestimonial
                        ? "bg-accent w-8"
                        : "bg-lavender/30 hover:bg-lavender/50"
                    }`}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-soft-purple">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Writing?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join the QuillSpark community and experience the future of writing assistance today.
          </p>
          <Button
            onClick={() => {
              const input = document.querySelector("input[type='email']") as HTMLInputElement;
              input?.focus();
            }}
            className="px-8 py-3 bg-white hover:bg-white/90 text-accent font-semibold rounded-xl transition-all duration-300 neumorphic-shadow"
          >
            Get Early Access Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight-blue text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-soft-purple flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">QuillSpark</span>
              </div>
              <p className="text-white/60 text-sm">
                Your AI-powered writing companion for the modern creator.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#product" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; 2026 QuillSpark. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
