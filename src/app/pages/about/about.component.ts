import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SITE_CONFIG } from '../../config/site.config';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { SeoService } from '../../core/services/seo.service';
import { KITCHEN_STANDARDS, TEAM } from '../../data';
import { CtaBannerComponent, IconComponent, SectionHeadingComponent, VegBadgeComponent } from '../../shared';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, RevealOnScrollDirective, IconComponent, VegBadgeComponent, SectionHeadingComponent, CtaBannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  private readonly seo = inject(SeoService);
  protected readonly config = inject(SITE_CONFIG);

  protected readonly standards = KITCHEN_STANDARDS;
  protected readonly team = TEAM;
  protected readonly yearsServing = this.config.establishedYear ? new Date().getFullYear() - this.config.establishedYear : null;

  ngOnInit(): void {
    this.seo.setPage({
      title: 'About',
      description: `About ${this.config.name}: a family-run pure-vegetarian catering kitchen in ${this.config.address.city}, serving traditional Andhra meals across ${this.config.serviceAreas.slice(0, 3).join(', ')} and beyond.`,
      path: 'about',
    });
  }
}
