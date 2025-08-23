import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Music, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-retro.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden">
        {/* Full-screen background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/c4cc63c7-61fd-4f69-a554-387f92518985.png')"
          }}
          role="img"
          aria-label="Southbank band members sitting together on a teal couch in a cozy room with exposed brick walls"
        ></div>
        
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* CTA Buttons positioned at bottom */}
        <div className="relative z-10 pb-20 px-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm">
              <Play className="mr-2 h-5 w-5" />
              Listen Now
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-background/80 backdrop-blur-sm">
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Shows
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center bg-secondary border-border hover:shadow-warm transition-all duration-300">
              <Music className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">New Music</h3>
              <p className="text-muted-foreground">Latest tracks available on all platforms</p>
            </Card>
            
            <Card className="p-6 text-center bg-secondary border-border hover:shadow-warm transition-all duration-300">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Live Shows</h3>
              <p className="text-muted-foreground">Check out our upcoming tour dates</p>
            </Card>
            
            <Card className="p-6 text-center bg-secondary border-border hover:shadow-warm transition-all duration-300">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Join Us</h3>
              <p className="text-muted-foreground">Sign up for exclusive updates and content</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;