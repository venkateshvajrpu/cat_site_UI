import { Injectable, inject } from '@angular/core';
import { SITE_CONFIG } from '../../config/site.config';
import { CateringService, MenuCategory } from '../../models';

/**
 * Builds every outbound contact link (WhatsApp / tel: / mailto:) from SITE_CONFIG.
 * Templates never assemble these strings themselves.
 */
@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private readonly config = inject(SITE_CONFIG);

  /** wa.me deep link, optionally with a prefilled message. */
  link(message?: string): string {
    const base = `https://wa.me/${this.config.whatsapp}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
  }

  general(): string {
    return this.link(
      `Hi ${this.config.name}, I'd like to enquire about pure-veg catering for an event in ${this.config.address.city}.`,
    );
  }

  forMenu(category: MenuCategory): string {
    return this.link(
      `Hi ${this.config.name}, I'd like a quote for your "${category.title}" menu. Event date, venue and guest count: `,
    );
  }

  forService(service: CateringService): string {
    return this.link(
      `Hi ${this.config.name}, I'd like to enquire about ${service.eventType} catering. Event date, venue and guest count: `,
    );
  }

  customMenu(): string {
    return this.link(
      `Hi ${this.config.name}, I'd like help planning a custom pure-veg menu. Event date, venue and guest count: `,
    );
  }

  telHref(): string {
    return `tel:${this.config.phone.replace(/\s+/g, '')}`;
  }

  mailtoHref(subject = 'Catering enquiry'): string {
    return `mailto:${this.config.email}?subject=${encodeURIComponent(subject)}`;
  }
}
