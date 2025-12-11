import houseSpecial from "@/assets/house_special.jpg";
import cheeseburger from "@/assets/cheeseburger.jpg";
interface MenuItemProps {
  name: string;
  price: string;
  description?: string;
  image?: string;
  featured?: boolean;
}
const MenuItem = ({
  name,
  price,
  description,
  image,
  featured
}: MenuItemProps) => {
  return <div className={`group relative overflow-hidden rounded-xl bg-card transition-all duration-300 hover:shadow-hover ${featured ? 'shadow-card' : 'shadow-soft'}`}>
      {image && <div className="aspect-[4/3] overflow-hidden">
          <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground text-lg font-sans">{name}</h3>
          <span className="whitespace-nowrap rounded-full bg-primary px-2.5 py-0.5 font-body text-xs font-medium text-primary-foreground">
            {price}
          </span>
        </div>
        {description && <p className="mt-1.5 font-body text-xs leading-relaxed text-muted-foreground">
            {description}
          </p>}
      </div>
    </div>;
};
interface SimpleMenuItemProps {
  name: string;
  price: string;
}
const SimpleMenuItem = ({
  name,
  price
}: SimpleMenuItemProps) => <div className="flex items-center justify-between border-b border-border py-3 last:border-0">
    <span className="font-body text-foreground">{name}</span>
    <span className="font-body text-sm font-medium text-muted-foreground">{price}</span>
  </div>;
const MenuSection = () => {
  const dips = [{
    name: "Sweet Chili Mayo",
    price: "€1.50"
  }, {
    name: "Truffle Mayo",
    price: "€1.50"
  }, {
    name: "Ketchup",
    price: "€1.50"
  }, {
    name: "Mustard",
    price: "€1.50"
  }, {
    name: "Mayonnaise",
    price: "€1.50"
  }];
  const softDrinks = [{
    name: "Coca-Cola",
    price: "€2.50"
  }, {
    name: "Coca-Cola Light",
    price: "€2.50"
  }, {
    name: "Coca-Cola Zero",
    price: "€2.50"
  }, {
    name: "Sprite",
    price: "€2.50"
  }, {
    name: "Red Fanta",
    price: "€2.50"
  }, {
    name: "Lemon Fanta",
    price: "€2.50"
  }, {
    name: "Blue Fanta",
    price: "€2.50"
  }];
  const alcoholicDrinks = [{
    name: "Mamos Beer 0.33l",
    price: "€5.00"
  }, {
    name: "Chilled Red Organic Wine",
    price: "€5.00"
  }, {
    name: "Crisp White Organic Wine",
    price: "€5.00"
  }, {
    name: "Rosé Spritzer Organic",
    price: "€5.00"
  }, {
    name: "Juicy Amber Wine Core",
    price: "€5.00"
  }];
  return <section id="menu" className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-foreground font-sans md:text-4xl">Our Menu</h2>
        </div>

        {/* Burgers Grid */}
        <div className="mb-8">
          <h3 className="mb-4 font-semibold text-foreground text-xl font-sans">Burgers</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <MenuItem name="House Special Smash Cheeseburger" price="€9.50" description="On brioche bun, with 100% beef double patty and spicy mayo + pickle relish." image={houseSpecial} featured />
            <MenuItem name="Double Smash Cheeseburger" price="€9.50" description="On brioche bun, with 100% beef patty, ketchup, mustard, homemade pickles, and onions." image={cheeseburger} featured />
          </div>
        </div>

        {/* Sides */}
        <div className="mb-8 rounded-xl bg-primary/30 p-5">
          <h3 className="mb-3 text-xl font-semibold text-foreground font-sans">Sides</h3>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-base text-foreground font-sans">French Fries</span>
              <p className="font-body text-xs text-muted-foreground">Golden, crispy, and perfectly salted</p>
            </div>
            <span className="rounded-full bg-teal px-4 py-2 font-body text-sm font-medium text-white">
              €5.00
            </span>
          </div>
        </div>

        {/* Other Items Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Dips */}
          <div className="rounded-2xl bg-card p-6 shadow-soft">
            <h3 className="mb-4 text-xl font-semibold text-foreground font-sans">Dips</h3>
            {dips.map(item => <SimpleMenuItem key={item.name} {...item} />)}
          </div>

          {/* Soft Drinks */}
          <div className="rounded-2xl bg-card p-6 shadow-soft">
            <h3 className="mb-4 text-xl font-semibold text-foreground font-sans">Soft Drinks</h3>
            <p className="mb-4 font-body text-xs text-muted-foreground">0.33l each</p>
            {softDrinks.map(item => <SimpleMenuItem key={item.name} {...item} />)}
            <div className="mt-4 border-t border-border pt-4">
              <SimpleMenuItem name="Avra Natural Mineral Water 0.5l" price="€0.50" />
            </div>
          </div>

          {/* Alcoholic Drinks */}
          <div className="rounded-2xl bg-card p-6 shadow-soft">
            <h3 className="mb-4 text-xl font-semibold text-foreground font-sans">Beer & Wine</h3>
            {alcoholicDrinks.map(item => <SimpleMenuItem key={item.name} {...item} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default MenuSection;