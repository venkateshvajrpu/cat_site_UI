import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../config/site.config';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { SeoService } from '../../core/services/seo.service';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { MENU, SERVICES, TESTIMONIALS, WHY_US } from '../../data';
import {
  CtaBannerComponent,
  IconComponent,
  SectionHeadingComponent,
  ServiceCardComponent,
  TestimonialCardComponent,
  VegBadgeComponent,
} from '../../shared';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    RouterLink,
    RevealOnScrollDirective,
    IconComponent,
    VegBadgeComponent,
    SectionHeadingComponent,
    ServiceCardComponent,
    TestimonialCardComponent,
    CtaBannerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);
  protected readonly config = inject(SITE_CONFIG);
  protected readonly wa = inject(WhatsappService);

  protected readonly whyUs = WHY_US;
  protected readonly featuredCategories = MENU.slice(0, 4);
  protected readonly services = SERVICES.slice(0, 4);
  protected readonly testimonials = TESTIMONIALS.slice(0, 3);

  ngOnInit(): void {
    this.seo.setPage({
      title: '',
      description: `${this.config.name} — pure-vegetarian South Indian catering in ${this.config.address.city}. Banana-leaf Andhra meals, tiffins, sweets and buffets for weddings, poojas and corporate events.`,
      path: '',
    });
  }
}
