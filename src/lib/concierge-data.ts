export type Product = {
  id: string;
  name: string;
  price: number;
  zone: string;
  category: "Apparel" | "Gear" | "Footwear" | "Accessories";
  image: string;
  features: string[];
};

export const CATALOG: Product[] = [
  { id: "p1", name: "Alpine Rain Jacket", price: 189, zone: "A1", category: "Apparel", image: "🧥", features: ["Waterproof", "Breathable", "Packable"] },
  { id: "p2", name: "Trail Hiking Boots", price: 229, zone: "B2", category: "Footwear", image: "🥾", features: ["Vibram Sole", "Ankle Support", "GTX Lined"] },
  { id: "p3", name: "LED Headlamp Pro", price: 49, zone: "C1", category: "Gear", image: "🔦", features: ["300 Lumens", "Rechargeable", "Waterproof"] },
  { id: "p4", name: "Insulated Water Bottle", price: 29, zone: "C2", category: "Accessories", image: "🧴", features: ["24h Cold", "BPA Free", "750ml"] },
  { id: "p5", name: "Merino Wool Base Layer", price: 79, zone: "A2", category: "Apparel", image: "👕", features: ["Odor Resistant", "Quick Dry", "Soft Touch"] },
  { id: "p6", name: "Lightweight Backpack 30L", price: 139, zone: "B1", category: "Gear", image: "🎒", features: ["Hydration Ready", "Rain Cover", "Ergonomic"] },
  { id: "p7", name: "Trekking Poles", price: 89, zone: "B3", category: "Gear", image: "🥢", features: ["Carbon Fiber", "Foldable", "Cork Grip"] },
  { id: "p8", name: "UV Sport Sunglasses", price: 59, zone: "C3", category: "Accessories", image: "🕶️", features: ["UV400", "Polarized", "Lightweight"] },
];

export const CATEGORIES = ["All", "Apparel", "Gear", "Footwear", "Accessories"] as const;
