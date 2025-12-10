import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpg";
import { Menu, X, Instagram } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Epos Burgers"
            className="h-10 w-10 rounded-full object-cover"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#menu"
            className="font-body text-sm font-medium text-foreground transition-colors hover:text-secondary"
          >
            Menu
          </a>
          <a
            href="#locations"
            className="font-body text-sm font-medium text-foreground transition-colors hover:text-secondary"
          >
            Locations
          </a>
          <a
            href="https://www.instagram.com/eposburgers/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-secondary"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://wolt.com/en/grc/athens/restaurant/epos-burger"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-2.5 font-body text-sm font-medium text-secondary-foreground transition-all hover:opacity-90"
          >
            Order on Wolt
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#menu"
              className="font-body text-lg font-medium text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </a>
            <a
              href="#locations"
              className="font-body text-lg font-medium text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Locations
            </a>
            <a
              href="https://www.instagram.com/eposburgers/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-lg font-medium text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
            <a
              href="https://wolt.com/en/grc/athens/restaurant/epos-burger"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 font-body text-sm font-medium text-secondary-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Order on Wolt
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
