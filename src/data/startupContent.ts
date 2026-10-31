export interface ProductionStep {
  step: string;
  title: string;
  tagline: string;
  desc: string;
  metrics: string;
  details: string[];
}

export const PRODUCTION_STEPS: ProductionStep[] = [
  {
    step: '01',
    title: 'Responsible Material Sourcing',
    tagline: 'Certified feedstock with 100% provenance tracking',
    desc: 'We reject throwaway virgin plastics. Every DailyMate product begins with certified post-industrial 6061-T6 aluminum, FSC-certified American walnut and beechwood, and 500D recycled Cordura textile.',
    metrics: '84% Recycled Feedstock Ratio',
    details: [
      'Alloy scrap batch testing for tensile purity',
      'FSC wood certification audit for sustainable forest replenishment',
      'REACH compliant non-toxic anodization dyes'
    ]
  },
  {
    step: '02',
    title: 'Precision CNC Milling & Laser Profiling',
    tagline: 'Micron-level tolerances for seamless mechanical fit',
    desc: 'Each component is carved from solid billets on 5-axis Japanese CNC milling machines, achieving tolerances within ±0.02mm. Chamfered edges are hand-deburred before bead-blasting for a tactile, silk-touch finish.',
    metrics: '±0.02mm Machining Tolerance',
    details: [
      'Multi-axis computer numerical control machining',
      'Dual micro-glass bead surface texturing',
      'Laser-etched metric graduations and serial marks'
    ]
  },
  {
    step: '03',
    title: 'Dynamic Stress & Fatigue Testing',
    tagline: 'Engineered to withstand over 10 years of aggressive daily usage',
    desc: 'Our stands endure 10,000 hinge rotations at 3kg torsional load without tension loss. Key rings undergo salt-spray corrosion tests, and our slings survive 50kg tensile pull tests on every strap joint.',
    metrics: '10,000 Cycle Hinge Durability',
    details: [
      'Automated robotic torque testing rigs',
      '72-hour humidity & perspiration resistance chamber',
      'Drop testing from 1.5m onto reinforced concrete'
    ]
  },
  {
    step: '04',
    title: 'Plastic-Free Molded Fiber Packaging',
    tagline: 'Unbleached biodegradable kraft with soy-based inks',
    desc: 'From our factory gate to your desk, zero single-use plastic films or foam inserts are used. Custom molded sugarcane bagasse cushions protect the product and dissolve harmlessly in residential compost.',
    metrics: '100% Zero-Plastic Shipments',
    details: [
      'FSC unbleached recycled card outer boxes',
      'Molded sugarcane & wheat straw cushioning inserts',
      'Water-activated natural gummed kraft paper tape'
    ]
  }
];

export interface StartupStudy {
  id: string;
  title: string;
  category: string;
  readTime: string;
  executiveSummary: string;
  keyFindings: string[];
  methodology: string;
  impactMetrics: { label: string; value: string }[];
}

export const STARTUP_STUDIES: StartupStudy[] = [
  {
    id: 'study-1',
    title: 'Ergonomic Desk Setup & Cervical Strain Mitigation',
    category: 'Biomechanical Research',
    readTime: '4 min read',
    executiveSummary: 'An investigation into mobile screen elevation in hybrid workspaces, measuring electromyographic (EMG) cervical muscle stress across 120 remote knowledge workers over 60 days.',
    keyFindings: [
      'A 45° to 60° elevated line-of-sight reduces neck flexor strain by 38% compared to flat desk resting.',
      'Weighted 380g dampening bases reduce micro-vibrations from keystrokes by 84%, preventing screen flutter during video calls.',
      'Quick glance orientation without phone pickup reduces smartphone distraction pickups by 22% during deep work.'
    ],
    methodology: 'Surface EMG tracking across trapezius and sternocleidomastoid muscle groups during 4-hour desk sessions, combined with digital device pickup logging.',
    impactMetrics: [
      { label: 'Strain Reduction', value: '-38%' },
      { label: 'Screen Stability', value: '+84%' },
      { label: 'Test Cohort', value: '120 Users' }
    ]
  },
  {
    id: 'study-2',
    title: 'Everyday Carry Friction & Pocket Wear Optimization',
    category: 'Materials & Wear Science',
    readTime: '3 min read',
    executiveSummary: 'Quantifying garment pocket wear, key jangle acoustic annoyance, and key-to-phone contact scratching across 500 urban commuters.',
    keyFindings: [
      'Loose key rings cause micro-scratches on 71% of smartphone display glass within 3 months when stored in the same pocket or bag pouch.',
      'Enclosed titanium and leather organization reduces pocket protrusion volume by 65%.',
      'Acoustic decibel readings dropped from 68 dB (loose jangle) to under 12 dB (imperceptible chime).'
    ],
    methodology: 'Mechanical abrasion drum testing comparing loose split-rings against enclosed titanium bar clamps across denim, wool, and screen glass surfaces.',
    impactMetrics: [
      { label: 'Volume Reduction', value: '-65%' },
      { label: 'Decibel Drop', value: '-56 dB' },
      { label: 'Pocket Fabric Life', value: '3.4×' }
    ]
  },
  {
    id: 'study-3',
    title: 'Crossbody Sling Load Balancing & Quick-Access Ergonomics',
    category: 'Product Engineering',
    readTime: '5 min read',
    executiveSummary: 'Optimizing strap geometry and magnetic quick-release hardware for commuter crossbody bags under varied urban transit conditions.',
    keyFindings: [
      'Contoured asymmetrical strap angles reduce single-shoulder trap fatigue by 41% versus standard symmetrical straps.',
      'Fidlock magnetic slide buckles achieve 0.8s one-handed release time while preventing accidental decoupling under 35kg shear tension.',
      'Integrated rear-facing passport and phone slot saves an average of 45 seconds during subway turnstile transit.'
    ],
    methodology: 'Motion capture sensors and digital force gauge testing across running, cycling, and crowded train transit simulations with 1.8kg payloads.',
    impactMetrics: [
      { label: 'Shoulder Fatigue', value: '-41%' },
      { label: 'Release Speed', value: '0.8s' },
      { label: 'Shear Strength', value: '35 kg' }
    ]
  },
  {
    id: 'study-4',
    title: 'Closed-Loop Aluminum Recovery & Modular Life Extension',
    category: 'Circularity & LCA',
    readTime: '4 min read',
    executiveSummary: 'A lifecycle assessment comparing monolithic injection-molded plastic accessories against modular, mechanically fastened aluminum-wood products.',
    keyFindings: [
      'DailyMate modular fastener architecture enables 94% component recovery compared to 4% for ultrasonic-welded plastic competitors.',
      'Embodied carbon per product is amortized over an estimated 12-year lifespan, reducing lifecycle emissions by 62% per user-year.',
      'Factory scrap recycling loops reclaim 98.7% of off-cut CNC aluminum shavings directly into alloy billets.'
    ],
    methodology: 'ISO 14040/44 compliant cradle-to-gate Life Cycle Assessment (LCA) conducted across raw material extraction, machining, distribution, and end-of-life recovery.',
    impactMetrics: [
      { label: 'Component Recovery', value: '94%' },
      { label: 'Lifecycle Emissions', value: '-62%' },
      { label: 'Scrap Reclaim', value: '98.7%' }
    ]
  }
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  product: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Elena Rostova',
    role: 'Principal Architectural Designer',
    company: 'Studio Form & Space',
    quote: 'The OmniStand Pro and Horizon Tray completely decluttered my drawing desk. The weighted base gives genuine confidence when tapping on an iPad, and the walnut grain matches high-end Scandinavian millwork.',
    product: 'OmniStand Pro & Horizon Tray',
    rating: 5
  },
  {
    name: 'Marcus Chen',
    role: 'Staff Infrastructure Engineer',
    company: 'Distributed Labs',
    quote: 'I hate pocket clutter and noisy keys. The OrbitKey Titanium clip silent manager is the best everyday accessory I have bought in years. Sleek, solid, and zero jangling during calls or walks.',
    product: 'OrbitKey Titanium Clip',
    rating: 5
  },
  {
    name: 'Sarah Lindqvist',
    role: 'Head of Operations',
    company: 'Nordic Velocity Ventures',
    quote: 'We ordered 120 custom-engraved DailyMate Commute Slings and Desk Trays for our annual team retreat. The laser engraving on the aluminum was razor-sharp, and the packaging was completely plastic-free.',
    product: 'Corporate Gifting Suite',
    rating: 5
  },
  {
    name: 'Arjun Mehta',
    role: 'Founder & Product Lead',
    company: 'CraftFlow',
    quote: 'Most phone stands tip over when you tap them. DailyMate engineered theirs with real mechanical intention. You can feel the precision hinge resistance the moment you pick it up.',
    product: 'OmniStand Pro',
    rating: 5
  }
];

export const GOOGLE_SITES_BLUEPRINT = {
  themeName: 'DailyMate Editorial Mint',
  colorPalette: [
    { name: 'Dark Forest', hex: '#103D2E', role: 'Primary text, dark headers, footer background' },
    { name: 'Brand Green', hex: '#1E7F55', role: 'Secondary brand identity, borders, buttons' },
    { name: 'Lime Accent', hex: '#B5F45A', role: 'High-visibility CTAs, selection badges, tags' },
    { name: 'Soft Linen', hex: '#F5F7F4', role: 'Main canvas, light section backgrounds' },
    { name: 'Pure White', hex: '#FFFFFF', role: 'Product cards, modal panels, high-contrast surfaces' }
  ],
  fonts: {
    primary: 'Plus Jakarta Sans',
    weights: ['Regular 400', 'Medium 500', 'SemiBold 600', 'Bold 700'],
    fallbacks: 'DM Sans, Outfit, system-ui'
  },
  siteHierarchy: [
    { page: 'Home', purpose: 'Hero showcase, value propositions, product highlights, and reviews' },
    { page: 'Products', purpose: 'Full catalog across Mobile Stands, Key Holders, Bags, Desk Organizers' },
    { page: 'Craft & Process', purpose: 'Step-by-step 4-phase manufacturing transparency' },
    { page: 'Startup Studies', purpose: 'Biomechanical & material research reports' },
    { page: 'Corporate Gifting', purpose: 'Bulk B2B pricing and laser customizer inquiry' },
    { page: 'Contact', purpose: 'Sample order form and operational communication desk' }
  ]
};
