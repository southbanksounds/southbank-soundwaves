import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Music", path: "/music" },
    { name: "Gallery", path: "/gallery" },
    { name: "Shows", path: "/shows" },
    { name: "Info", path: "/info" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Band Logo/Name */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/35dd3003-f5d9-4591-b3ae-5ebbd004a030.png" 
              alt="Southbank" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-primary relative",
                  location.pathname === item.path
                    ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-teal after:rounded-full"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-muted-foreground hover:text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;