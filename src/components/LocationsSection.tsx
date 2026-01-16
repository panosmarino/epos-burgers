import { MapPin, Clock } from "lucide-react";
import fillerImage from "@/assets/epos_filler_image.jpg";
interface LocationCardProps {
  name: string;
  schedule?: {
    days: string;
    hours: string;
  }[];
  specialNote?: string;
}
const LocationCard = ({
  name,
  schedule,
  specialNote
}: LocationCardProps) => {
  return <div className="group rounded-2xl bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-hover">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          <MapPin className="h-5 w-5 text-secondary" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground font-sans">{name}</h3>
      </div>
      
      {specialNote ? (
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
          <span className="font-body text-sm font-medium text-foreground">{specialNote}</span>
        </div>
      ) : (
        <div className="space-y-3">
          {schedule?.map((item, index) => <div key={index} className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
              <div>
                <span className="font-body text-sm font-medium text-foreground">{item.days}</span>
                <span className="font-body text-sm text-muted-foreground"> — {item.hours}</span>
              </div>
            </div>)}
        </div>
      )}
    </div>;
};
const LocationsSection = () => {
  const locations = [{
    name: "Glyfada",
    schedule: [{
      days: "Monday – Friday",
      hours: "17:30–00:00"
    }, {
      days: "Friday – Saturday",
      hours: "12:30–01:30"
    }, {
      days: "Sunday",
      hours: "12:30–01:00"
    }]
  }, {
    name: "Avana",
    schedule: [{
      days: "Monday – Thursday",
      hours: "12:00–00:30"
    }, {
      days: "Friday – Saturday",
      hours: "12:00–01:30"
    }]
  }, {
    name: "Antiparos",
    specialNote: "Open only during the summer"
  }];
  return <section id="locations" className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="font-body text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Find Us
            </span>
            <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl font-sans">Visit Our Locations</h2>
            <p className="mt-4 font-body text-lg text-muted-foreground">Three premises thoughtfully positioned across Greece</p>

            <div className="mt-10 space-y-6">
              {locations.map(location => <LocationCard key={location.name} {...location} />)}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
              <img src={fillerImage} alt="Epos Burgers served with style" className="h-full w-full object-cover" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-3xl bg-primary" />
          </div>
        </div>
      </div>
    </section>;
};
export default LocationsSection;