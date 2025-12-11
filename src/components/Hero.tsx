import bannerImage from "@/assets/epos_banner.jpg";
import logo from "@/assets/logo.jpg";
const Hero = () => {
  return <section className="relative min-h-screen overflow-hidden">
      {/* Banner Image Background */}
      <div className="absolute inset-0">
        <img src={bannerImage} alt="Delicious Epos Burgers with fries and dipping sauces" className="h-full w-full object-cover" />
        {/* Gradient overlay for smooth blend to background */}
        <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, transparent 20%, hsl(350 30% 98% / 0.4) 50%, hsl(350 30% 98%) 85%)'
      }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <div className="animate-fade-up text-center" style={{
        animationDelay: '0.2s'
      }}>
          <img src={logo} alt="Epos Burgers Logo - est. 2024" className="mx-auto mb-8 h-40 w-40 rounded-full object-cover shadow-card md:h-56 md:w-56" />
          <h1 className="text-4xl font-bold tracking-tight text-secondary md:text-6xl lg:text-7xl font-sans">Epos Burgers</h1>
          <p className="mx-auto mt-4 max-w-md font-body text-lg text-muted-foreground md:text-xl">est. 2024</p>
          <p className="mx-auto mt-2 max-w-sm font-body text-sm text-muted-foreground">
            Order via Wolt for delivery or pickup!
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://wolt.com/en/grc/athens/restaurant/epos-burger" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3.5 font-body text-sm font-medium text-secondary-foreground shadow-soft transition-all hover:shadow-hover hover:scale-105">
              Order on Wolt
            </a>
            <a href="#menu" className="inline-flex items-center justify-center rounded-full border-2 border-secondary bg-transparent px-8 py-3.5 font-body text-sm font-medium text-secondary transition-all hover:bg-secondary hover:text-secondary-foreground">
              View Menu
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 z-10 flex justify-center animate-float">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>;
};
export default Hero;