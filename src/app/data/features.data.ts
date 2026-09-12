import type { Feature } from '../models';

// TODO(client): adjust the "why choose us" points to match real strengths.
export const WHY_US: Feature[] = [
  { icon: 'leaf', title: '100% pure vegetarian', teluguTitle: 'శుద్ధ శాకాహారం', text: 'A dedicated veg-only kitchen. No egg, meat or seafood — ever.' },
  { icon: 'meal', title: 'Traditional Andhra recipes', text: 'Gongura, avakaya, gutti vankaya and bobbatlu made the way Vizag households remember.' },
  { icon: 'lamp', title: 'Hygienic, temple-grade cooking', text: 'Filtered water, fresh produce from the day’s market and staff trained in food safety.' },
  { icon: 'clock', title: 'On-time, every time', text: 'Muhurtham timings are sacred. We plan backwards from the moment guests sit down.' },
  { icon: 'buffet', title: 'Banana-leaf or buffet', text: 'Seated leaf service, elegant buffets or live counters — your choice, your budget.' },
];

// TODO(client): confirm the booking process.
export const HOW_IT_WORKS: Feature[] = [
  { icon: 'whatsapp', title: 'Tell us about the event', text: 'Message us on WhatsApp with the date, venue, guest count and occasion.' },
  { icon: 'meal', title: 'Get a menu & quote', text: 'We suggest a menu that fits the occasion and share transparent per-plate pricing.' },
  { icon: 'sweet', title: 'Taste & confirm', text: 'For larger events, visit our kitchen for a tasting. Confirm with a small advance.' },
  { icon: 'buffet', title: 'We cook, serve, clean up', text: 'Our team arrives early, serves with a smile and leaves the venue spotless.' },
];

// TODO(client): confirm kitchen standards and certifications (e.g. FSSAI licence number).
export const KITCHEN_STANDARDS: Feature[] = [
  { icon: 'leaf', title: 'Fresh, local produce', text: 'Vegetables sourced daily from Vizag’s Rythu Bazaars; no frozen shortcuts.' },
  { icon: 'lamp', title: 'FSSAI-licensed kitchen', text: 'Registered kitchen with regular pest control and temperature-logged storage.' },
  { icon: 'drink', title: 'Filtered water & pure ghee', text: 'RO water for cooking and drinking; ghee and oils from trusted brands.' },
  { icon: 'box', title: 'Safe transport', text: 'Insulated, sealed containers keep food hot and untouched until service.' },
];

// TODO(client): replace with real team members (name, role, short note).
export const TEAM: Feature[] = [
  { icon: 'lamp', title: 'Head Cook', text: 'Thirty years of Andhra wedding kitchens, from Vizag to Rajahmundry.' },
  { icon: 'buffet', title: 'Service Manager', text: 'Plans the serving flow so every guest is served hot food on time.' },
  { icon: 'sweet', title: 'Sweets Specialist', text: 'Hand-makes bobbatlu, ariselu and pootharekulu for every order.' },
];
