import houseSpecial from "@/assets/house_special.jpg";
import cheeseburger from "@/assets/cheeseburger.jpg";

interface MenuItemProps {
  name: string;
  price: string;
  description?: string;
  image?: string;
  featured?: boolean;
}

const MenuItem = ({ name, price, description, image, featured }: MenuItemProps) => {
  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-card transition-all duration-300 hover:shadow-hover ${
        featured ? 'shadow-card' : 'shadow-soft'
      }`}
    >
      {image && (
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
          <span className="whitespace-nowrap rounded-full bg-primary px-3 py-1 font-body text-sm font-medium text-primary-foreground">
            {price}
          </span>
        </div>
        {description && (
          <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

interface SimpleMenuItemProps {
  name: string;
  price: string;
}

const SimpleMenuItem = ({ name, price }: SimpleMenuItemProps) => (
  <div className="flex items-center justify-between border-b border-border py-3 last:border-0">
    <span className="font-body text-foreground">{name}</span>
    <span className="font-body text-sm font-medium text-muted-foreground">{price}</span>
  </div>
);

const MenuSection = () => {
  const dips = [
    { name: "Sweet Chili Mayo", price: "€1.50" },
    { name: "Truffle Mayo", price: "€1.50" },
    { name: "Ketchup", price: "€1.50" },
    { name: "Mustard", price: "€1.50" },
    { name: "Mayonnaise", price: "€1.50" },
  ];

  const softDrinks = [
    { name: "Coca-Cola", price: "€2.50" },
    { name: "Coca-Cola Light", price: "€2.50" },
    { name: "Coca-Cola Zero", price: "€2.50" },
    { name: "Sprite", price: "€2.50" },
    { name: "Red Fanta", price: "€2.50" },
    { name: "Lemon Fanta", price: "€2.50" },
    { name: "Blue Fanta", price: "€2.50" },
  ];

  const alcoholicDrinks = [
    { name: "Mamos Beer 0.33l", price: "€5.00" },
    { name: "Chilled Red Organic Wine", price: "€5.00" },
    { name: "Crisp White Organic Wine", price: "€5.00" },
    { name: "Rosé Spritzer Organic", price: "€5.00" },
    { name: "Juicy Amber Wine Core", price: "€5.00" },
  ];

  return (
    <section id="menu" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-body text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Menu
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
            Taste the Smash
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-muted-foreground">
            Every burger is made with 100% beef, served on a brioche bun with our signature sauces.
          </p>
        </div>

        {/* Burgers Grid */}
        <div className="mb-16">
          <h3 className="mb-8 font-display text-2xl font-semibold text-foreground">Burgers</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <MenuItem
              name="House Special Smash Cheeseburger"
              price="€9.50"
              description="On brioche bun, with 100% beef double patty and spicy mayo + pickle relish."
              image={houseSpecial}
              featured
            />
            <MenuItem
              name="Double Smash Cheeseburger"
              price="€9.50"
              description="On brioche bun, with 100% beef patty, ketchup, mustard, homemade pickles, and onions."
              image={cheeseburger}
              featured
            />
          </div>
        </div>

        {/* Sides */}
        <div className="mb-16 rounded-2xl bg-primary/30 p-8">
          <h3 className="mb-6 font-display text-2xl font-semibold text-foreground">Sides</h3>
          <div className="flex items-center justify-between">
            <div>
              <span className="font-display text-lg text-foreground">French Fries</span>
              <p className="font-body text-sm text-muted-foreground">Golden, crispy, and perfectly salted</p>
            </div>
            <span className="rounded-full bg-secondary px-4 py-2 font-body text-sm font-medium text-secondary-foreground">
              €5.00
            </span>
          </div>
        </div>

        {/* Other Items Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Dips */}
          <div className="rounded-2xl bg-card p-6 shadow-soft">
            <h3 className="mb-4 font-display text-xl font-semibold text-foreground">Dips</h3>
            {dips.map((item) => (
              <SimpleMenuItem key={item.name} {...item} />
            ))}
          </div>

          {/* Soft Drinks */}
          <div className="rounded-2xl bg-card p-6 shadow-soft">
            <h3 className="mb-4 font-display text-xl font-semibold text-foreground">Soft Drinks</h3>
            <p className="mb-4 font-body text-xs text-muted-foreground">0.33l each</p>
            {softDrinks.map((item) => (
              <SimpleMenuItem key={item.name} {...item} />
            ))}
            <div className="mt-4 border-t border-border pt-4">
              <SimpleMenuItem name="Avra Natural Mineral Water 0.5l" price="€0.50" />
            </div>
          </div>

          {/* Alcoholic Drinks */}
          <div className="rounded-2xl bg-card p-6 shadow-soft">
            <h3 className="mb-4 font-display text-xl font-semibold text-foreground">Beer & Wine</h3>
            {alcoholicDrinks.map((item) => (
              <SimpleMenuItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
