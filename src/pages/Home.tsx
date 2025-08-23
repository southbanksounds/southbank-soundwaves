import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Music, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-retro.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-foreground">
            SOUTHBANK
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Power pop melodies with americana heart
          </p>
          
          {/* Featured Video */}
          <div className="mb-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border p-6 shadow-glow">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Southbank - Latest Track"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-semibold mt-4 text-foreground">
                Latest Release: "City Echoes"
              </h3>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:shadow-accent">
              <Play className="mr-2 h-5 w-5" />
              Listen Now
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
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
            <Card className="p-6 text-center bg-secondary border-border hover:shadow-accent transition-all duration-300">
              <Music className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">New Music</h3>
              <p className="text-muted-foreground">Latest tracks available on all platforms</p>
            </Card>
            
            <Card className="p-6 text-center bg-secondary border-border hover:shadow-accent transition-all duration-300">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Live Shows</h3>
              <p className="text-muted-foreground">Check out our upcoming tour dates</p>
            </Card>
            
            <Card className="p-6 text-center bg-secondary border-border hover:shadow-accent transition-all duration-300">
              <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
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