import type { IconName } from './icon.model';

export type MenuTag = 'signature' | 'festival' | 'jain' | 'kids' | 'seasonal';

export interface MenuItem {
  name: string;
  teluguName?: string;
  description: string;
  tags?: MenuTag[];
  isSpicy?: boolean;
  /** Optional path under public/, e.g. `images/menu/pesarattu.webp`. */
  image?: string;
}

export interface MenuCategory {
  /** URL-safe id, also used for the category filter and image file names. */
  id: string;
  title: string;
  teluguTitle?: string;
  description: string;
  icon: IconName;
  items: MenuItem[];
}
