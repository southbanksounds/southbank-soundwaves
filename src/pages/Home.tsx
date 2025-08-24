
import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

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
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-background/80 backdrop-blur-sm">
              <Link to="/music">
                <Play className="mr-2 h-5 w-5" />
                Listen Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-background/80 backdrop-blur-sm">
              <Link to="/shows">
                <Calendar className="mr-2 h-5 w-5" />
                Upcoming Shows
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
