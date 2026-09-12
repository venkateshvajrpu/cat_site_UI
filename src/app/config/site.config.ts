import { InjectionToken } from '@angular/core';

/**
 * ★ SINGLE PLACE TO REBRAND ★
 * Every business-specific value on the site comes from here. Templates and
 * services inject `SITE_CONFIG`; nothing is hard-coded elsewhere.
 * Also update `src/styles/tokens.css` (palette) and `public/images/**` per client.
 */

export type SocialPlatform = 'instagram' | 'facebook' | 'youtube';

export interface OpeningHours {
  days: string;
  open: string;
  close: string;
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  legalName?: string;
  /** Display format, e.g. "+91 99999 99999". Used for `tel:` after stripping spaces. */
  phone: string;
  /** Digits only, country code included, e.g. "919999999999". Used for wa.me links. */
  whatsapp: string;
  email: string;
  address: Address;
  /** Google Maps embed iframe `src`. */
  mapEmbedUrl: string;
  /** Google Maps share link for "Get directions". */
  mapLink: string;
  hours: OpeningHours[];
  socials: SocialLink[];
  serviceAreas: string[];
  /** Canonical origin without trailing slash, e.g. "https://example.com". */
  siteUrl: string;
  /** Path under public/, used for Open Graph when a page has no image. */
  defaultOgImage: string;
  establishedYear?: number;
}

export const SITE_CONFIG = new InjectionToken<SiteConfig>('SITE_CONFIG');

export const siteConfig: SiteConfig = {
  // TODO(client): business name and tagline
  name: 'Sri Annapurna Caterers',
  tagline: 'Pure-veg South Indian catering, served with Andhra warmth',
  legalName: 'Sri Annapurna Caterers',
  // TODO(client): phone number (display format)
  phone: '+91 99999 99999',
  // TODO(client): WhatsApp number, digits only with country code
  whatsapp: '919999999999',
  // TODO(client): email
  email: 'hello@example.com',
  // TODO(client): address
  address: {
    line1: 'D.No 1-2-3, Main Road',
    line2: 'MVP Colony',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    pincode: '530017',
  },
  // TODO(client): Google Maps embed URL (Share → Embed a map → copy the iframe src)
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60866.3!2d83.28!3d17.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVisakhapatnam!5e0!3m2!1sen!2sin!4v1700000000000',
  // TODO(client): Google Maps share link
  mapLink: 'https://maps.google.com/?q=Visakhapatnam',
  // TODO(client): opening hours
  hours: [
    { days: 'Monday – Saturday', open: '8:00 AM', close: '9:00 PM' },
    { days: 'Sunday', open: '9:00 AM', close: '6:00 PM' },
  ],
  // TODO(client): social profile links (remove any that don't exist)
  socials: [
    { platform: 'instagram', url: 'https://instagram.com/example' },
    { platform: 'facebook', url: 'https://facebook.com/example' },
    { platform: 'youtube', url: 'https://youtube.com/@example' },
  ],
  // TODO(client): confirm service areas
  serviceAreas: [
    'Visakhapatnam',
    'Gajuwaka',
    'Madhurawada',
    'Bheemunipatnam',
    'Anakapalli',
    'Vizianagaram',
    'Srikakulam',
  ],
  // TODO(client): production domain, no trailing slash
  siteUrl: 'https://example.com',
  defaultOgImage: 'images/og-default.jpg',
  // TODO(client): year the business started
  establishedYear: 2010,
};
