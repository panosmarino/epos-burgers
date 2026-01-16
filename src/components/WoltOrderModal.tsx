import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface WoltOrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const stores = [
  {
    name: "Glyfada",
    url: "https://wolt.com/en/grc/athens/restaurant/epos-burger",
  },
  {
    name: "Avana",
    url: "https://wolt.com/en/grc/athens/restaurant/epos-burger-chalandri",
  },
];

const WoltOrderModal = ({ open, onOpenChange }: WoltOrderModalProps) => {
  const handleStoreSelect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="mx-4 max-w-md rounded-2xl border-border bg-background sm:mx-auto">
        <DialogHeader className="text-center sm:text-center">
          <DialogTitle className="font-sans text-2xl font-bold text-secondary">
            Choose Your Location
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground">
            Select the store nearest to you to order on Wolt
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-3">
          {stores.map((store) => (
            <button
              key={store.name}
              onClick={() => handleStoreSelect(store.url)}
              className="group flex items-center gap-4 rounded-xl border-2 border-border bg-card p-4 text-left transition-all hover:border-teal hover:shadow-card"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-grow">
                <span className="font-sans text-lg font-semibold text-secondary">
                  {store.name}
                </span>
              </div>
              <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-teal" />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WoltOrderModal;

// Hook for easy modal state management
export const useWoltModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return {
    isOpen,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
    setIsOpen,
  };
};
