import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Play, Music as MusicIcon } from "lucide-react";

const Music = () => {
  const releases = [
    {
      title: "Lost Cause",
      year: "2024",
      type: "Single",
      spotifyUrl: "https://open.spotify.com/track/6dxi01IXK298SYR4E3i9ZD?si=a099578ccefd4918",
      appleMusicUrl: "https://music.apple.com/us/song/lost-cause/1756037646",
      bandcampUrl: "https://southbanksounds.bandcamp.com/track/lost-cause",
      artwork: "/lovable-uploads/ddfdc6c4-87ff-4758-95c5-439c179c5653.png"
    },
    {
      title: "Midnight Reflections EP",
      year: "2023",
      type: "EP",
      spotifyUrl: "https://open.spotify.com/album/example",
      appleMusicUrl: "https://music.apple.com/us/album/example",
      bandcampUrl: "https://southbanksounds.bandcamp.com/album/example",
      artwork: "https://picsum.photos/400/400?random=2"
    },
    {
      title: "Urban Landscapes",
      year: "2023",
      type: "Album",
      spotifyUrl: "https://open.spotify.com/album/example",
      appleMusicUrl: "https://music.apple.com/us/album/example",
      bandcampUrl: "https://southbanksounds.bandcamp.com/album/example",
      artwork: "https://picsum.photos/400/400?random=3"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Music
          </h1>
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
                    <p className="text-accent font-medium mb-4">{release.year}</p>
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

                    <Button 
                      variant="outline" 
                      asChild 
                      className="border-secondary text-foreground hover:bg-secondary hover:text-secondary-foreground"
                    >
                      <a href={release.bandcampUrl} target="_blank" rel="noopener noreferrer">
                        <MusicIcon className="mr-2 h-4 w-4" />
                        Bandcamp
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
            <Button 
              asChild
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a 
                href="https://mailchi.mp/f69b33511105/southbank-signup" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join Our Mailing List
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Music;