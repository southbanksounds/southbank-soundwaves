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
      title: "All Those Other Guys",
      year: "2024",
      type: "Single",
      spotifyUrl: "https://open.spotify.com/track/6rED0UggMUjSvSxi7Wryxh?si=7c74fe60c4214824",
      appleMusicUrl: "https://music.apple.com/us/song/all-those-other-guys/1733202335",
      bandcampUrl: "https://southbanksounds.bandcamp.com/track/all-those-other-guys",
      artwork: "/lovable-uploads/515e3eec-17ab-413a-8b55-fcf316012974.png"
    },
    {
      title: "Can't Say Why",
      year: "2023",
      type: "Single",
      spotifyUrl: "https://open.spotify.com/track/60m2Q5XwF9Mo1LdXZ7G8im?si=bb9608a28b8a4ded",
      appleMusicUrl: "https://music.apple.com/us/song/cant-say-why/1686842746",
      bandcampUrl: "https://southbanksounds.bandcamp.com/track/cant-say-why",
      artwork: "/lovable-uploads/aa023faa-ed5b-4733-9133-fc6276d3242a.png"
    },
    {
      title: "Empty Nest",
      year: "2023",
      type: "Single",
      spotifyUrl: "https://open.spotify.com/track/2G6XTPFPKUEIe8KuZ0xAWe?si=7b0dfe4b62a946e0",
      appleMusicUrl: "https://music.apple.com/us/song/empty-nest/1671277218",
      bandcampUrl: "https://southbanksounds.bandcamp.com/track/empty-nest",
      artwork: "/lovable-uploads/e0f0bcc9-178e-4f1f-a98f-aa29189c9f53.png"
    },
    {
      title: "Touching the Stove",
      year: "2022",
      type: "Album",
      spotifyUrl: "https://open.spotify.com/album/1w38jLHxK3j0FOBzAYRuuX?si=DvUXGIt8Tc2Up42lsi7gbw",
      appleMusicUrl: "https://music.apple.com/us/album/touching-the-stove/1611448117",
      bandcampUrl: "https://southbanksounds.bandcamp.com/album/touching-the-stove",
      artwork: "/lovable-uploads/f989b5c3-0ab8-404a-a408-6ba3ae93b9f0.png"
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

                  {/* Spotify Embed */}
                  <div className="mb-6">
                    <iframe 
                      src={release.spotifyUrl.replace('open.spotify.com', 'open.spotify.com/embed').split('?')[0]}
                      width="100%" 
                      height="152" 
                      frameBorder="0" 
                      allowTransparency={true} 
                      allow="encrypted-media"
                      className="rounded-lg"
                    ></iframe>
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