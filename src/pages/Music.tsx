import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Play } from "lucide-react";

const Music = () => {
  const releases = [
    {
      title: "City Echoes",
      year: "2024",
      type: "Single",
      description: "Our latest atmospheric track exploring urban soundscapes and midnight reflections.",
      spotifyUrl: "https://open.spotify.com/track/example",
      appleMusicUrl: "https://music.apple.com/us/album/example",
      artwork: "https://picsum.photos/400/400?random=1"
    },
    {
      title: "Midnight Reflections EP",
      year: "2023",
      type: "EP",
      description: "A collection of introspective pieces recorded during late-night sessions.",
      spotifyUrl: "https://open.spotify.com/album/example",
      appleMusicUrl: "https://music.apple.com/us/album/example",
      artwork: "https://picsum.photos/400/400?random=2"
    },
    {
      title: "Urban Landscapes",
      year: "2023",
      type: "Album",
      description: "Our debut album capturing the essence of city life through ambient soundscapes.",
      spotifyUrl: "https://open.spotify.com/album/example",
      appleMusicUrl: "https://music.apple.com/us/album/example",
      artwork: "https://picsum.photos/400/400?random=3"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Our Music
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our discography and discover the sounds that define Southbank's atmospheric journey.
          </p>
        </div>

        {/* Releases Grid */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          {releases.map((release, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:shadow-glow transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Artwork */}
                <div className="flex-shrink-0">
                  <img
                    src={release.artwork}
                    alt={`${release.title} artwork`}
                    className="w-48 h-48 object-cover rounded-lg shadow-dark"
                  />
                </div>

                {/* Release Info */}
                <div className="flex-1">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {release.title}
                      </h3>
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                        {release.type}
                      </span>
                    </div>
                    <p className="text-accent font-medium mb-2">{release.year}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {release.description}
                    </p>
                  </div>

                  {/* Streaming Links */}
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      asChild 
                      className="bg-gradient-accent text-accent-foreground hover:shadow-accent"
                    >
                      <a href={release.spotifyUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="mr-2 h-4 w-4" />
                        Spotify
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      asChild 
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <a href={release.appleMusicUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="mr-2 h-4 w-4" />
                        Apple Music
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-hero border-border inline-block">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Be the first to hear our new releases and exclusive content.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Join Our Mailing List
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Music;