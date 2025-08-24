import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";

const Shows = () => {
  const upcomingShows: any[] = [];

  const pastShows = [
    {
      date: "2024-08-17",
      venue: "Sahara Lounge",
      city: "Austin, TX"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Live Shows
          </h1>
        </div>

        {/* Upcoming Shows */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Upcoming Shows
          </h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {upcomingShows.length > 0 ? (
              upcomingShows.map((show, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:shadow-glow transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <div className="flex items-center text-accent">
                          <Calendar className="mr-2 h-5 w-5" />
                          <span className="font-semibold">{formatDate(show.date)}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>{show.time}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {show.venue}
                      </h3>
                      
                      <div className="flex items-center text-muted-foreground mb-3">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{show.city}</span>
                      </div>
                      
                      <p className="text-muted-foreground">
                        {show.description}
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Button 
                        asChild 
                        size="lg"
                        className="bg-gradient-accent text-accent-foreground hover:shadow-accent"
                      >
                        <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer">
                          Get Tickets
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <Card className="p-8 bg-card border-border text-center">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  No Upcoming Shows
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're currently working on new dates. Follow us on Bandsintown to be the first to know when new shows are announced.
                </p>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="https://www.bandsintown.com/a/15601908-southbank" target="_blank" rel="noopener noreferrer">
                    Follow on Bandsintown
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            )}
          </div>
        </section>


        {/* Bandsintown Integration */}
        <section className="mb-20">
          <Card className="p-8 bg-gradient-hero border-border text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Stay Updated on Tour Dates
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Follow us on Bandsintown to get notifications about new shows and never miss a performance in your area.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="https://www.bandsintown.com/a/15601908-southbank" target="_blank" rel="noopener noreferrer">
                Follow on Bandsintown
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </Card>
        </section>

        {/* Past Shows */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Recent Performances
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pastShows.map((show, index) => (
              <Card key={index} className="p-6 bg-secondary border-border">
                <div className="flex items-center text-muted-foreground mb-3">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{formatDate(show.date)}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {show.venue}
                </h3>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{show.city}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shows;