import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, CalendarCheck, Instagram, Facebook, Music, Mail, AtSign, Users } from "lucide-react";

const Info = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            About Southbank
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Bio Section */}
          <section className="mb-16">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  Southbank is a band. It used to be a single person, but now it's a band. The sound is essentially the same—and why not, same songwriter, same frontman. But now, instead of a revolving cast of crack studio musicians, there's a full lineup—five wayward souls who found each other and agreed to spend an inordinate amount of time together to make their collaboration sound good to other people.
                </p>
                <p className="mb-4">
                  There's still that sweet, familiar Americana hum underneath everything, like that old Son Volt t-shirt you refuse to retire. But if you insist on labels, it's really power pop. Expect jangly guitars, catchy melodies, and lyrics that bounce from the quirky corners of suburban life to the soul-crushing absurdity of office jobs to the tangled, beautiful, messy reality of relationships.
                </p>
                <p className="mb-4">
                  Southbank began as Jeff Neely's secret songwriting hobby, a creative escape for a design executive who moonlit as the Old 97's social media and merch guru. The COVID years turned that dabbling into a full-blown dive, with encouragement (and a little help) from friends like John Dufilho of the Deathray Davies, who contributed to and mixed Jeff's debut album, <em>Touching the Stove</em>. The guest presence of Ken Bethea, lead guitarist of the aforementioned Old 97's, certainly elevated the affair.
                </p>
                <p className="mb-4">
                  The overall sound bore a passing resemblance to the charming, unpretentious first Wilco album, <em>A.M.</em>, when they were still figuring it all out but already sounded perfect. Throw in a healthy dose of Fountains of Wayne's clever-as-hell power-pop hooks, and maybe an aspirational nod to The Hold Steady's anthemic, storytelling glory. Predictably, one may also discern the unmistakable, glorious twang and swagger of Old 97's.
                </p>
                <p className="mb-4">
                  One listener, upon experiencing Southbank, described it as "Catchy geek punk country rock pop," a label that was, if nothing else, concise.
                </p>
                <p>
                  After hitting a songwriting retreat and realizing he was the only one not in a band, Jeff decided the world deserved to see these songs come to life in rooms full of sweaty people, so a call was put out for suitable musicians. And just like that, Southbank became a "they" instead of a "he." With the additions of Tony Lynch (drums), Sean Heffernan (bass), Amanda Thomas (keys), and Sam Favata (lead guitar), Southbank now truly can be called a band, and it's probably best you arrange to see them live ASAP.
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
              <Card className="p-6 bg-card border-border text-center">
                <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Sign up for Email List
                </h3>
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a 
                    href="https://mailchi.mp/f69b33511105/southbank-signup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Sign Up
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>

              {/* General Contact */}
              <Card className="p-6 bg-card border-border text-center">
                <CalendarCheck className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Business Inquiries
                </h3>
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="mailto:sounthbanksounds@gmail.com">
                    Contact Us
                    <Mail className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            </div>
          </section>

          {/* Social Media Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
              Follow Us
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/southbanksounds/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 bg-card border-border text-center hover:shadow-warm transition-shadow cursor-pointer">
                  <Instagram className="h-10 w-10 mx-auto mb-4 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Instagram
                  </h3>
                </Card>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/profile.php?id=61577176394539" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 bg-card border-border text-center hover:shadow-warm transition-shadow cursor-pointer">
                  <Facebook className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Facebook
                  </h3>
                </Card>
              </a>

              {/* Bandcamp */}
              <a 
                href="https://southbanksounds.bandcamp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 bg-card border-border text-center hover:shadow-warm transition-shadow cursor-pointer">
                  <Music className="h-10 w-10 mx-auto mb-4 text-secondary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Bandcamp
                  </h3>
                </Card>
              </a>
            </div>
          </section>

          {/* Press Kit */}
          <section>
            <Card className="p-8 bg-secondary border-border text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Press & Media
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a 
                    href="https://www.dropbox.com/scl/fo/bvbrtdw4r0fprobwtbz40/AOXe0zW0GFA0ENaNu_KOX_4?rlkey=bgkthx6y6b8yq7cuzknk3ov2i&st=vxn4axeg&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Press Kit
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a 
                    href="https://www.dropbox.com/scl/fo/h7rvvtfo6t15v364bhhsw/ACLXZlImvtA_XMWbF809MPQ?rlkey=mbemltgb9cty1cyai4e7ernxh&st=reoqi1nw&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    High-Res Photos
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
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