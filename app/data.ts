// app/data.ts
// ---- All content for the Mobil Detailing site lives here ----
// To rebrand for another client: change the values below. No need to touch page.tsx.

export const business = {
  name: "Mobil Detailing",
  shortName: "Mobil Detailing",
  tagline: "We Come To You",
  phone: "847-964-3474",
  email: "", // Add email if client has one
  hours: "Open 7 days a week — Call or Text for availability",
  serviceAreas: ["Cars", "RVs", "Boats of All Sizes"],
  paymentMethods: ["Cash", "Venmo", "Zelle", "Cash App"],
  facebook: "", // Add Facebook URL if client has one
  hero: {
    headline: "Premium Auto Care At Your Doorstep",
    subheadline:
      "Scratch removal, paint correction, full exterior polishing, deep interior cleaning, and complete interior & exterior detailing — done professionally at your location.",
    ctaPrimary: "Book Appointment",
    ctaSecondary: "Text for Quote",
  },
  about: {
    headline: "Professional Detailing — Wherever You Are",
    body: `We bring professional-grade equipment directly to your doorstep, so you can skip the shop and still get high-quality results. Whether you need a quick refresh or a full restoration-style detail, we treat every vehicle with care, precision, and attention to detail.`,
    highlights: [
      "Scratch removal & paint correction",
      "Full exterior polishing & buffing",
      "Deep interior cleaning & odor removal",
      "Ceramic coating for long-lasting protection",
      "Headlight restoration",
      "Boats, RVs, and vehicles of all sizes",
    ],
  },
};

// ---- SERVICE PACKAGES ----
export const pricing = {
  complete: [
    { type: "Cars", price: 230 },
    { type: "Trucks & SUVs", price: 270 },
    { type: "Vans & Commercial", price: 300 },
  ],
  interiorOnly: [
    { type: "Car", price: 120 },
    { type: "Truck/SUV", price: 150 },
  ],
  exteriorOnly: [
    { type: "Car", price: 80 },
    { type: "Truck/SUV", price: 100 },
  ],
  restoration: [
    { type: "Car (Starting at)", price: 400 },
    { type: "Truck/SUV (Starting at)", price: 600 },
  ],
  addOns: [
    { name: "Ceramic Coating", price: "800-1200" },
    { name: "Ceramic Wax / Soft Ceramic", price: "15" },
    { name: "Headlight Restoration", price: "75" },
    { name: "Glass Coating", price: "200" },
    { name: "Trim Restore", price: "50" },
    { name: "Leather Restore", price: "25-100" },
    { name: "Engine Bay Cleaning", price: "50" },
    { name: "Carpet Recolor", price: "50-300" },
    { name: "Scratch Correction", price: "200-250" },
    { name: "Small Glass Crack Repair", price: "20-60" },
    { name: "Iron/Rust Removal", price: "20+" },
    { name: "Full Tire Dressing", price: "35" },
    { name: "Tire Lettering", price: "200-300" },
    { name: "Paint Decontamination", price: "35" },
    { name: "Heavy Stain Removal", price: "30-50" },
    { name: "Biohazard (Urine/Mold)", price: "15-30" },
  ],
  discounts: [
    {
      title: "Send a Photo for a Fast Estimate",
      description:
        "Text us a photo of your vehicle and we'll get back to you quickly with a personalized quote.",
      badge: "FAST QUOTE",
    },
  ],
};

// ---- SERVICES ----
export const services = [
  {
    title: "Paint Correction / Swirl Removal",
    description:
      "We remove swirl marks, scratches, and imperfections for a flawless finish. If you think the scratches are too deep for anything but a complete repaint, don't rush to a repair shop — give us a call first.",
    features: [
      "Full paint correction for scratches or swirl marks",
      "Buffing & polishing",
      "Gloss enhancement",
      "Save time and money vs. a repaint",
    ],
  },
  {
    title: "Ceramic Coating",
    description:
      "Creates a long-lasting protective layer over your vehicle's clear coat. Adds a stunning look with more shine and depth, while protecting against UV exposure, water, dirt, and road grime.",
    features: [
      "Protects against UV fading & oxidation",
      "Repels water, dirt, and contaminants",
      "Makes washing quicker & easier",
      "Preserves long-term resale value",
    ],
  },
  {
    title: "Full Deep Clean of Your Interior",
    description:
      "Full interior detailing including carpet cleaning, upholstery cleaning, seat steam cleaning, leather conditioning, and odor elimination. Cars, trucks, SUVs, vans, and specialty vehicles.",
    features: [
      "Carpet & upholstery cleaning",
      "Seat steam cleaning",
      "Leather conditioning",
      "Odor elimination",
    ],
  },
  {
    title: "Headlight Restoration",
    description:
      "We restore clarity to foggy, yellowed headlights for improved appearance and safety.",
    features: [
      "Removes yellowing & haze",
      "Improves nighttime visibility",
      "Restores like-new clarity",
      "Improves vehicle appearance",
    ],
  },
  {
    title: "Boat & Yacht Detailing",
    description:
      "Professional boat and yacht polishing services and interior detailing. We bring professional-grade equipment directly to your location.",
    features: [
      "Exterior polishing & buffing",
      "Interior detailing",
      "Oxidation removal",
      "Boats of all sizes",
    ],
  },
  {
    title: "Buffing & Polishing",
    description:
      "Full exterior polishing and buffing to bring back that showroom shine. We treat every vehicle with care, precision, and attention to detail.",
    features: [
      "Removes light scratches",
      "Enhances paint depth",
      "Prepares surface for coating",
      "Showroom-quality finish",
    ],
  },
];

// ---- GALLERY (before/after pairs — drop images in /public) ----
export const gallery = [
  { before: "/before-1.jpg", after: "/after-1.jpg", title: "Paint Correction", vehicle: "Sedan" },
  { before: "/before-2.jpg", after: "/after-2.jpg", title: "Full Interior Detail", vehicle: "SUV" },
  { before: "/before-3.jpg", after: "/after-3.jpg", title: "Ceramic Coating", vehicle: "Truck" },
  { before: "/before-4.jpg", after: "/after-4.jpg", title: "Headlight Restoration", vehicle: "Sedan" },
  { before: "/before-5.jpg", after: "/after-5.jpg", title: "Boat Detailing", vehicle: "Boat" },
];

// ---- VEHICLES WE SERVICE ----
export const vehicles = [
  { emoji: "🚗", label: "Cars" },
  { emoji: "🚐", label: "RVs" },
  { emoji: "🛥️", label: "Boats of All Sizes" },
];

// ---- WHY CHOOSE US ----
export const whyChooseUs = [
  {
    title: "We Come To You",
    description:
      "Skip the shop. We bring professional-grade equipment directly to your location.",
  },
  {
    title: "High-Quality Products",
    description:
      "We use professional-grade products and back every job with attention to detail.",
  },
  {
    title: "All Vehicles Welcome",
    description:
      "Cars, trucks, SUVs, vans, RVs, and boats of all sizes — we handle them all.",
  },
  {
    title: "Fast Estimates",
    description:
      "Send us a photo of your vehicle and get a fast, accurate estimate by text.",
  },
];

// ---- HOW IT WORKS ----
export const howItWorks = [
  {
    step: "1",
    title: "Send a Photo",
    description:
      "Text us a photo of your vehicle and let us know what you need done.",
  },
  {
    step: "2",
    title: "Get a Quote",
    description:
      "We'll reply with a fast, accurate quote based on your vehicle and services.",
  },
  {
    step: "3",
    title: "Schedule",
    description:
      "Pick a time that works for you. We come to your home or office.",
  },
  {
    step: "4",
    title: "We Detail",
    description:
      "We arrive with professional equipment and leave your vehicle looking like new.",
  },
];

// ---- BOOKING CONFIG ----
export const booking = {
  web3formsKey: "YOUR_ACCESS_KEY_HERE", // Optional: get one at web3forms.com
  serviceOptions: [
    "Paint Correction / Swirl Removal",
    "Ceramic Coating",
    "Full Interior Deep Clean",
    "Headlight Restoration",
    "Buffing & Polishing",
    "Boat & Yacht Detailing",
    "Full Interior & Exterior Detail",
    "Other (Specify in notes)",
  ],
  vehicleOptions: [
    "Car",
    "Truck / SUV",
    "Van / Commercial",
    "RV",
    "Boat / Yacht",
    "Other (Specify in notes)",
  ],
};
