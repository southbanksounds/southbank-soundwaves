import { Facebook, Instagram, Music } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/southbankband",
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram", 
      icon: Instagram,
      url: "https://instagram.com/southbankband",
      color: "hover:text-pink-500"
    },
    {
      name: "Bandcamp",
      icon: Music,
      url: "https://southbank.bandcamp.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Band Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-foreground mb-2">SOUTHBANK</h3>
            <p className="text-muted-foreground text-sm">
              (c) 2025 Southbank LLC. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground transition-all duration-300 hover:scale-110 ${link.color}`}
                  aria-label={`Follow us on ${link.name}`}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;