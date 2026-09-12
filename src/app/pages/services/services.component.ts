import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { SITE_CONFIG } from '../../config/site.config';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { SeoService } from '../../core/services/seo.service';
import { FAQS, HOW_IT_WORKS, SERVICES } from '../../data';
import { CtaBannerComponent, FaqAccordionComponent, IconComponent, SectionHeadingComponent, ServiceCardComponent } from '../../shared';

@Component({
  selector: 'app-services',
  imports: [RevealOnScrollDirective, IconComponent, SectionHeadingComponent, ServiceCardComponent, FaqAccordionComponent, CtaBannerComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly config = inject(SITE_CONFIG);

  protected readonly services = SERVICES;
  protected readonly steps = HOW_IT_WORKS;
  protected readonly faqs = FAQS;

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Services',
      description: `Pure-veg catering in ${this.config.address.city} for weddings, engagements, gruhapravesam, poojas, birthdays, corporate lunches, buffets, banana-leaf service, box meals and outdoor events.`,
      path: 'services',
    });
  }
}
