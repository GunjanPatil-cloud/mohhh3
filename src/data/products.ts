export interface Product {
  id: string;
  name: string;
  category: 'stands' | 'keys' | 'bags' | 'organizers';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  materials: string[];
  dimensions: string;
  weight: string;
  warranty: string;
  colors: { name: string; hex: string }[];
  inStock: boolean;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'omnistand-pro',
    name: 'DailyMate OmniStand Pro',
    category: 'stands',
    categoryLabel: 'Mobile Stands',
    price: 49,
    originalPrice: 59,
    rating: 4.9,
    reviewsCount: 142,
    tagline: 'Dual-axis 360° rotating aluminum smartphone & tablet stand',
    description: 'Forged from aircraft-grade 6061-T6 aluminum, the OmniStand Pro delivers rock-solid, zero-wobble elevation. Features a weighted brass damping base, micro-textured silicone cushioning, and precision cable pass-through for seamless desk charging.',
    image: '/src/assets/images/product_stand_aluminum_1793461812264.jpg',
    highlights: [
      'Dual-Axis 360° Rotation with tactile detent',
      '380g Weighted Counterbalance Base (Zero wobble)',
      'Anodized scratch-resistant bead-blasted surface',
      'Compatible with phones & tablets up to 12.9"'
    ],
    materials: ['6061-T6 Aluminum Alloy', 'Sintered Brass Bushings', 'Food-Grade Silicone Pads'],
    dimensions: '118 × 95 × 142 mm',
    weight: '380g',
    warranty: '10-Year Mechanical Guarantee',
    colors: [
      { name: 'Space Gray', hex: '#4B5563' },
      { name: 'Matte Silver', hex: '#D1D5DB' },
      { name: 'Forest Noir', hex: '#103D2E' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'pocketfold-magstand',
    name: 'DailyMate PocketFold MagStand',
    category: 'stands',
    categoryLabel: 'Mobile Stands',
    price: 29,
    originalPrice: 35,
    rating: 4.8,
    reviewsCount: 89,
    tagline: 'Ultra-slim 4.2mm magnetic folding travel stand',
    description: 'The thinnest collapsible stand in our lineup. Folds flatter than a credit card stack and snaps onto magnetic phone cases instantly with N52 neodymium magnets. Perfect for coffee shop work and flights.',
    image: '/src/assets/images/product_stand_aluminum_1793461812264.jpg',
    highlights: [
      'Ultra-thin 4.2mm folded thickness',
      'N52 Neodymium Magnetic Snap System',
      'Portrait & Landscape multi-angle viewing',
      'Fits inside cardholders and front pockets'
    ],
    materials: ['Recycled 6000-series Aluminum', 'Rare Earth Neodymium Magnets', 'Soft-touch TPU'],
    dimensions: '98 × 62 × 4.2 mm',
    weight: '62g',
    warranty: '5-Year Guarantee',
    colors: [
      { name: 'Space Gray', hex: '#4B5563' },
      { name: 'Matte Black', hex: '#1F2937' }
    ],
    inStock: true
  },
  {
    id: 'orbitkey-titanium',
    name: 'DailyMate OrbitKey Titanium Clip',
    category: 'keys',
    categoryLabel: 'Key Holders',
    price: 39,
    originalPrice: 45,
    rating: 4.9,
    reviewsCount: 218,
    tagline: 'Silent magnetic titanium & vegetable-tanned leather key manager',
    description: 'Eliminates noisy key jangle forever. Houses 2 to 7 keys in a streamlined, silent envelope. Built with surgical grade-5 titanium side plates, full-grain Italian vegetable-tanned saddle leather, and an integrated D-ring for car fobs.',
    image: '/src/assets/images/product_key_holder_1793461811735.jpg',
    highlights: [
      'Completely silences key chime and pocket abrasion',
      'Grade 5 Titanium & Vegetable-Tanned Italian Leather',
      'Solid brass knurled thumb-screw tension lock',
      'Quick-release magnetic car key fob coupler'
    ],
    materials: ['Grade 5 Titanium', 'Full-Grain Vegetable-Tanned Leather', 'Machined Brass Hardware'],
    dimensions: '82 × 21 × 18 mm',
    weight: '34g',
    warranty: 'Lifetime Craftsmanship Guarantee',
    colors: [
      { name: 'Saddle Tan', hex: '#9A5B2E' },
      { name: 'Deep Espresso', hex: '#3E2723' },
      { name: 'Stealth Black', hex: '#18181B' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'dockwall-magnetic',
    name: 'DailyMate EntryDock Floating Key Rail',
    category: 'keys',
    categoryLabel: 'Key Holders',
    price: 45,
    originalPrice: 52,
    rating: 4.7,
    reviewsCount: 76,
    tagline: 'Minimalist solid walnut floating wall dock with hidden magnetic grip',
    description: 'The entryway solution for disciplined homes. Carved from a single piece of FSC-certified American walnut with high-energy neodymium magnets concealed beneath the bottom edge. Includes a top mail channel and eyewear slot.',
    image: '/src/assets/images/product_key_holder_1793461811735.jpg',
    highlights: [
      'Concealed neodymium magnet array holds up to 800g per key cluster',
      'FSC-Certified American Walnut with natural wax coat',
      'Top recessed channel for mail, badges, and sunglasses',
      'Damage-free 3M VHB mounting or concealed screw anchors'
    ],
    materials: ['FSC-Certified American Walnut', 'Neodymium Magnets', 'Natural Beeswax Oil'],
    dimensions: '280 × 50 × 35 mm',
    weight: '310g',
    warranty: '10-Year Guarantee',
    colors: [
      { name: 'American Walnut', hex: '#5D4037' },
      { name: 'Natural Oak', hex: '#D7CCC8' }
    ],
    inStock: true
  },
  {
    id: 'commute-sling-4l',
    name: 'DailyMate Commute Sling 4L',
    category: 'bags',
    categoryLabel: 'Everyday Bags',
    price: 69,
    originalPrice: 85,
    rating: 4.9,
    reviewsCount: 312,
    tagline: 'Weatherproof Cordura tech crossbody with magnetic Fidlock buckle',
    description: 'Engineered for the daily commute and weekend exploration. Made from ultra-durable 500D recycled Cordura nylon with YKK AquaGuard weatherproof zippers. Features dedicated padded pockets for an 11-inch tablet, phone, keys, and cards.',
    image: '/src/assets/images/product_daily_sling_1793461826128.jpg',
    highlights: [
      'German-engineered Fidlock magnetic V-buckle for rapid detachment',
      'Waterproof 500D Recycled Cordura & YKK AquaGuard zippers',
      'Concealed RFID-shielded passport & wallet pocket',
      'Internal elastic organizing loops for cables, chargers, and pens'
    ],
    materials: ['500D Recycled Cordura Nylon', 'Fidlock Magnetic Hardware', 'Hypalon Reinforcements'],
    dimensions: '290 × 190 × 85 mm',
    weight: '360g',
    warranty: 'Lifetime Warranty',
    colors: [
      { name: 'Charcoal Black', hex: '#262626' },
      { name: 'Olive Green', hex: '#3B4D3C' },
      { name: 'Sand Taupe', hex: '#A39988' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'daypack-modular-18l',
    name: 'DailyMate Modular Commuter 18L',
    category: 'bags',
    categoryLabel: 'Everyday Bags',
    price: 119,
    originalPrice: 139,
    rating: 4.8,
    reviewsCount: 164,
    tagline: 'Ergonomic all-weather daily commuter backpack with suspended laptop cell',
    description: 'Balanced between office minimalism and rugged durability. Features an independent suspended sleeve for up to 16" laptops, breathable channeled EVA back panel, luggage trolley pass-through, and modular magnetic anchor loops.',
    image: '/src/assets/images/product_daily_sling_1793461826128.jpg',
    highlights: [
      'Suspended 16-inch laptop cradle with 360° impact bumper',
      'Clamshell 180° opening for rapid packing and airport screening',
      'High-density EVA foam lumbar support & ventilated mesh channels',
      'Hidden airtag tracker pocket and luggage trolley sleeve'
    ],
    materials: ['Ballistic 840D Recycled Nylon', 'High-Density EVA Foam', 'Aircraft Aluminum G-Hooks'],
    dimensions: '460 × 310 × 160 mm',
    weight: '890g',
    warranty: 'Lifetime Warranty',
    colors: [
      { name: 'Obsidian Black', hex: '#1C1917' },
      { name: 'Slate Gray', hex: '#4B5563' }
    ],
    inStock: true
  },
  {
    id: 'horizon-desk-tray',
    name: 'DailyMate Horizon Desk Tray Trio',
    category: 'organizers',
    categoryLabel: 'Desk Organizers',
    price: 59,
    originalPrice: 69,
    rating: 4.9,
    reviewsCount: 184,
    tagline: 'Modular solid walnut & sandblasted aluminum valet desk station',
    description: 'Transform cluttered desks into calm, intentional workspaces. The Horizon Trio features a solid American walnut perimeter tray paired with two removable sandblasted anodized aluminum valet modules with fluted pen rests and cable notches.',
    image: '/src/assets/images/product_desk_organizer_1793461825517.jpg',
    highlights: [
      'Modular 3-piece layout: arrange together or distribute across the desk',
      'Solid CNC-routed American Walnut finished with organic Danish oil',
      'Sandblasted matte aluminum inserts with sound-dampening cork underside',
      'Dedicated fluted cradle for stylus, fountain pens, and memo cards'
    ],
    materials: ['Solid American Walnut', 'Anodized 6061 Aluminum', 'Natural Portuguese Cork'],
    dimensions: '320 × 170 × 24 mm',
    weight: '520g',
    warranty: '10-Year Guarantee',
    colors: [
      { name: 'Walnut & Space Gray', hex: '#4A3728' },
      { name: 'Oak & Matte Silver', hex: '#A89782' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'hexstation-tower',
    name: 'DailyMate HexStation Hub Tower',
    category: 'organizers',
    categoryLabel: 'Desk Organizers',
    price: 79,
    originalPrice: 95,
    rating: 4.7,
    reviewsCount: 92,
    tagline: 'Sculpted desktop organizer with built-in 15W Qi2 fast charging coaster',
    description: 'Combining functional stationery organization with wireless power. The HexStation features precision-milled hexagonal cylinders for writing tools, flash drives, scissors, and cables, seated upon a rapid 15W wireless charging pad.',
    image: '/src/assets/images/product_desk_organizer_1793461825517.jpg',
    highlights: [
      'Integrated 15W Qi2 Fast Wireless Charging station for phones and earbuds',
      'Solid weighted zinc alloy base prevents accidental sliding (640g)',
      'Hexagonal modular partitions with soft microfiber lining',
      'Integrated rear hidden cable channel and USB-C braided cable included'
    ],
    materials: ['Zinc Alloy Base', 'Matte Anodized Aluminum', 'Microfiber Lining'],
    dimensions: '210 × 120 × 85 mm',
    weight: '640g',
    warranty: '5-Year Guarantee',
    colors: [
      { name: 'Graphite Black', hex: '#262626' },
      { name: 'Silver Frost', hex: '#E5E7EB' }
    ],
    inStock: true
  }
];
