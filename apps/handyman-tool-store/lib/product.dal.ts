export type Category = 'power-tools' | 'hand-tools' | 'chainsaws';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  specs: string[];
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Professional Chainsaw 3000',
    category: 'chainsaws',
    price: 599.99,
    image: '/placeholder.svg?height=400&width=400',
    description:
      'Heavy-duty chainsaw with 50cc engine, perfect for cutting thick trees and logs. Features automatic chain tension and vibration control.',
    specs: [
      '50cc Engine',
      '18" Bar Length',
      'Automatic Chain Tension',
      'Vibration Control',
      '9.5 kg Weight',
    ],
    rating: 4.7,
    reviews: 324,
  },
  {
    id: '2',
    name: 'Electric Drill & Driver 2000',
    category: 'power-tools',
    price: 89.99,
    image: '/placeholder.svg?height=400&width=400',
    description:
      'Cordless 20V lithium drill with dual speed transmission. Ideal for drilling and driving in wood, metal, and plastics.',
    specs: [
      '20V Lithium Battery',
      '1/2" Chuck',
      '1500 RPM Max',
      'LED Work Light',
      '2-Speed Transmission',
    ],
    rating: 4.5,
    reviews: 512,
  },
  {
    id: '3',
    name: 'Impact Driver Pro',
    category: 'power-tools',
    price: 129.99,
    image: '/placeholder.svg?height=400&width=400',
    description:
      'High-torque impact driver with 3200 RPM. Perfect for fastening and driving large fasteners with minimal effort.',
    specs: ['18V Motor', '3200 RPM', '3500 BPM', '1/4" Hex', 'Rubber Grip Handle'],
    rating: 4.8,
    reviews: 618,
  },
  {
    id: '4',
    name: 'Claw Hammer 16oz',
    category: 'hand-tools',
    price: 24.99,
    image: '/placeholder.svg?height=400&width=400',
    description:
      'Classic 16oz claw hammer with fiberglass handle and comfortable grip. Built to last through years of use.',
    specs: ['16oz Head', 'Fiberglass Handle', 'Curved Claw', 'Anti-Slip Grip', 'Lifetime Warranty'],
    rating: 4.6,
    reviews: 215,
  },
  {
    id: '5',
    name: 'Circular Saw Master',
    category: 'power-tools',
    price: 149.99,
    image: '/placeholder.svg?height=400&width=400',
    description:
      '7.25" circular saw with 5800 RPM. Laser guide for precise cutting in wood and composite materials.',
    specs: ['7.25" Blade', '5800 RPM', 'Laser Guide', 'Dust Extraction Port', '15 Amp Motor'],
    rating: 4.4,
    reviews: 287,
  },
  {
    id: '6',
    name: 'Adjustable Wrench Set',
    category: 'hand-tools',
    price: 34.99,
    image: '/placeholder.svg?height=400&width=400',
    description:
      '4-piece adjustable wrench set in chrome plated steel. Covers all standard sizes for general maintenance and repairs.',
    specs: [
      '4 Different Sizes',
      'Chrome Plated Steel',
      'Smooth Adjustment',
      'Metric & Imperial',
      'Carrying Bag',
    ],
    rating: 4.3,
    reviews: 156,
  },
  {
    id: '7',
    name: 'Mini Chainsaw Ultra',
    category: 'chainsaws',
    price: 199.99,
    image: '/placeholder.svg?height=400&width=400',
    description:
      'Compact electric chainsaw for light-duty work. Perfect for pruning and cutting branches with minimal noise.',
    specs: ['800W Motor', '10" Bar', 'Electric Start', 'Auto Oiling', 'Low Noise Operation'],
    rating: 4.6,
    reviews: 298,
  },
  {
    id: '8',
    name: 'Power Drill Combo Kit',
    category: 'power-tools',
    price: 179.99,
    image: '/placeholder.svg?height=400&width=400',
    description:
      'Complete drill kit with drill, driver, and circular saw attachment. Over 400 pieces of accessories included.',
    specs: [
      '3-Tool Combo',
      '20V Battery System',
      '400+ Accessories',
      'Hard Case Storage',
      'Fast Charger',
    ],
    rating: 4.9,
    reviews: 743,
  },
  {
    id: '9',
    name: 'Professional Toolbox',
    category: 'hand-tools',
    price: 79.99,
    image: '/placeholder.svg?height=400&width=400',
    description:
      'Heavy-duty metal toolbox with 5 drawers and complete tool set. Lockable for security and portability.',
    specs: [
      'Steel Construction',
      '5 Drawers',
      '120+ Tools Included',
      'Lockable Design',
      'Carry Handle',
    ],
    rating: 4.7,
    reviews: 189,
  },
  {
    id: '10',
    name: 'Gas Chainsaw Beast',
    category: 'chainsaws',
    price: 799.99,
    image: '/placeholder.svg?height=400&width=400',
    description:
      'Professional-grade gas chainsaw with 55cc engine. Designed for commercial use and heavy-duty logging work.',
    specs: [
      '55cc Engine',
      '20" Bar Length',
      'Rear Handle Design',
      'Professional Ignition',
      '11 kg Weight',
    ],
    rating: 4.8,
    reviews: 402,
  },
];

export function getProducts(
  category?: Category,
  priceRange?: { min: number; max: number }
): Product[] {
  return products.filter((product) => {
    if (category && product.category !== category) return false;
    if (priceRange && (product.price < priceRange.min || product.price > priceRange.max))
      return false;
    return true;
  });
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getAllCategories(): Category[] {
  return ['power-tools', 'hand-tools', 'chainsaws'];
}
