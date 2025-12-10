import logo from "@/assets/logo.jpg";
import { Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-secondary py-16 text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <img src={logo} alt="Epos Burgers" className="h-24 w-24 rounded-full object-cover" />
          <div>
            <h3 className="text-2xl font-bold font-sans">Epos Burgers</h3>
            <p className="mt-1 font-body text-sm text-secondary-foreground/70">est. 2024</p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#menu" className="font-body text-sm transition-opacity hover:opacity-70">
              Menu
            </a>
            <a href="#locations" className="font-body text-sm transition-opacity hover:opacity-70">
              Locations
            </a>
            <a href="https://www.instagram.com/eposburgers/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70" aria-label="Follow us on Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://wolt.com/en/grc/athens/restaurant/epos-burger" target="_blank" rel="noopener noreferrer" className="font-body text-sm transition-opacity hover:opacity-70">
              Order on Wolt
            </a>
          </div>

          <div className="mt-4 border-t border-secondary-foreground/20 pt-8">
            <p className="font-body text-xs text-secondary-foreground/60">
              © {new Date().getFullYear()} Epos Burgers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;