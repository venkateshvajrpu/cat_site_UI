export type GalleryCategory = 'events' | 'food' | 'setup';

export interface GalleryImage {
  /** Path under public/, e.g. `images/gallery/wedding-leaf-meal.webp`. */
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}
