import type { IconName } from './icon.model';

export interface CateringService {
  id: string;
  title: string;
  teluguTitle?: string;
  /** Short label such as "Wedding", "Corporate". Used in WhatsApp prefills. */
  eventType: string;
  description: string;
  features: string[];
  minGuests?: number;
  /** Path under public/, e.g. `images/services/wedding.webp`. */
  image: string;
  icon: IconName;
}
