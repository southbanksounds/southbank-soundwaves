import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, ExternalLink, Users } from "lucide-react";

const Info = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            About Southbank
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn more about our story, our sound, and how to connect with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Bio Section */}
          <section className="mb-16">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  Southbank emerged from the atmospheric soundscapes of London's urban landscape, where the 
                  convergence of modern architecture and timeless river views creates a unique sonic palette. 
                  Our music explores the intersection of electronic ambience and organic instrumentation, 
                  crafting soundscapes that reflect the pulse of contemporary city life.
                </p>
                <p className="mb-4">
                  Formed in 2022, we've been on a journey to create music that captures the essence of 
                  urban solitude and connection. Our sound draws inspiration from the quiet moments found 
                  within the bustling city - the echo of footsteps on empty streets, the hum of distant 
                  traffic, and the reflective calm of riverside walks.
                </p>
                <p>
                  Through our releases, we aim to provide a sonic escape that resonates with those who 
                  find beauty in the overlooked corners of metropolitan life. Each track is a postcard 
                  from the city's soul, inviting listeners to explore their own relationship with the 
                  spaces they inhabit.
                </p>
              </div>
            </Card>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Email List Signup */}
              <Card className="p-6 bg-gradient-hero border-border text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Join Our Community
                </h3>
                <p className="text-muted-foreground mb-6">
                  Stay updated with exclusive content, early access to new releases, and behind-the-scenes insights.
                </p>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a 
                    href="https://mailchimp.com/southbank-signup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Sign Up for Updates
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>

              {/* General Contact */}
              <Card className="p-6 bg-card border-border text-center">
                <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Business Inquiries
                </h3>
                <p className="text-muted-foreground mb-6">
                  For bookings, collaborations, press inquiries, or general questions, we'd love to hear from you.
                </p>
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="mailto:hello@southbankband.com">
                    Contact Us
                    <Mail className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            </div>
          </section>

          {/* Press Kit */}
          <section>
            <Card className="p-8 bg-secondary border-border text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Press & Media
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Media professionals can access our press kit including high-resolution photos, 
                biographies, and promotional materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Download Press Kit
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-muted text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  High-Res Photos
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Info;