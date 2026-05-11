export const PIZZAS = [
  {
    id: 1,
    name: "Il Padrino Special",
    subtitle: "The Godfather's Choice",
    desc: "Hand-stretched dough, San Marzano tomatoes, fior di latte, truffle oil, prosciutto crudo. Marzano — The Godfather's choice.",
    price: 18.99,
    time: "25–35 MIN",
    tier: "LEGENDARY",
    tierColor: "#E8A020",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
    card: { name: "Michael Corleone", title: "Il Padrino", tier: "Legendary" },
    ingredients: ["Artichoke Heart", "Parma Ham", "Porcini Mushroom", "Mozzarella", "Tomato"],
  },
  {
    id: 2,
    name: "Capone: The Smoky Boss",
    subtitle: "The Dapper Don's Classic",
    desc: "Smoky pepperoni, roasted garlic, aged provolone, San Marzano sauce. A pizza that demands respect.",
    price: 16.99,
    time: "25–35 MIN",
    tier: "LEGENDARY",
    tierColor: "#E8A020",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    card: { name: "Al Capone", title: "The Boss", tier: "Legendary" },
    ingredients: ["Pepperoni", "Roasted Garlic", "Provolone", "Basil", "Chili Flakes"],
  },
  {
    id: 3,
    name: "Gotti Margherita Regale",
    subtitle: "The Dapper Don's Classic",
    desc: "The purest expression of pizza art. Buffalo mozzarella DOP, San Marzano D.O.P., fresh basil. Perfect in its simplicity.",
    price: 13.99,
    time: "25–35 MIN",
    tier: "GOLD",
    tierColor: "#D4A847",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&q=80",
    card: { name: "John Gotti", title: "Gold Boss Card", tier: "Gold" },
    ingredients: ["Artichoke Heart", "Parma Ham", "Porcini Mushroom", "Mozzarella", "Tomato"],
  },
  {
    id: 4,
    name: "Soldato Napoletana",
    subtitle: "Loyal to Tradition",
    desc: "Classic Napoletana with anchovies, capers, olives, and oregano on a perfectly charred crust.",
    price: 14.99,
    time: "20–30 MIN",
    tier: "GOLD",
    tierColor: "#D4A847",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80",
    card: { name: "Salvatore Riina", title: "Il Capo dei Capi", tier: "Gold" },
    ingredients: ["Anchovies", "Capers", "Olives", "Oregano", "Mozzarella"],
  },
  {
    id: 5,
    name: "Don Vito Supreme",
    subtitle: "An Offer You Can't Refuse",
    desc: "Loaded with Italian sausage, roasted peppers, mushrooms, and fresh mozzarella on wood-fired dough.",
    price: 19.99,
    time: "30–40 MIN",
    tier: "MYTHIC",
    tierColor: "#C44040",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80",
    card: { name: "Vito Corleone", title: "The Don", tier: "Mythic" },
    ingredients: ["Italian Sausage", "Roasted Peppers", "Mushrooms", "Mozzarella", "Basil"],
  },
  {
    id: 6,
    name: "Consigliere Quattro",
    subtitle: "The Wise Advisor's Pick",
    desc: "Four cheese blend — gorgonzola, fontina, parmigiano, mozzarella — drizzled with truffle honey.",
    price: 17.99,
    time: "25–35 MIN",
    tier: "LEGENDARY",
    tierColor: "#E8A020",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    card: { name: "Tom Hagen", title: "Consigliere", tier: "Legendary" },
    ingredients: ["Gorgonzola", "Fontina", "Parmigiano", "Mozzarella", "Truffle Honey"],
  },
];

export const RARITY_TIERS = [
  { name: "Mythic", color: "#C44040", label: "Il Capo dei Capi · Rarest of all" },
  { name: "Legendary", color: "#E8A020", label: "Boss-level cards · Very rare" },
  { name: "Boss", color: "#7B68EE", label: "Boss-level cards · Very rare" },
  { name: "Gold", color: "#D4A847", label: "Soldier cards · Standard" },
];

export const SIZES = [
  { label: "Small", price: -3 },
  { label: "Medium — Base", price: 0 },
  { label: "Large", price: 3 },
  { label: "Family", price: 6 },
];

export const CRUSTS = ["Classic Thin", "Thick Roman", "Stuffed Cheese", "Gluten Free"];

export const USER_DATA = {
  name: "John Corleone",
  email: "john@capoitaliano.com",
  address: "123 Mulberry Street, Manhattan, NY 10013",
  orders: [
    { name: "Don Vito", id: "ORD-2026-001", date: "4/5/2026", status: "Delivered", price: 28.99 },
    { name: "Consigliere", id: "ORD-2026-002", date: "3/20/2026", status: "Delivered", price: 22.99 },
  ],
  collection: [
    { name: "Salvatore Riina", unlocked: true, tier: "Gold" },
    { name: "Tom Hagen", unlocked: true, tier: "Legendary" },
    { name: "Michael Corleone", unlocked: true, tier: "Legendary" },
    { name: "Vito Corleone", unlocked: false, tier: "Mythic" },
  ],
};

export function getPizzaById(id) {
  return PIZZAS.find(pizza => pizza.id === id);
}

export function calculatePrice(basePizza, size, crust) {
  const sizePrice = SIZES.find(s => s.label === size)?.price || 0;
  return parseFloat((basePizza.price + sizePrice).toFixed(2));
}
