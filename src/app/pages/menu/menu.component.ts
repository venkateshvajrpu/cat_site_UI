import { ChangeDetectionStrategy, Component, OnInit, computed, inject, input, linkedSignal } from '@angular/core';
import { Router } from '@angular/router';
import { SITE_CONFIG } from '../../config/site.config';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { SeoService } from '../../core/services/seo.service';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { MENU } from '../../data';
import { IconComponent, MenuItemCardComponent, SectionHeadingComponent, VegBadgeComponent } from '../../shared';

const ALL = 'all';

@Component({
  selector: 'app-menu',
  imports: [RevealOnScrollDirective, IconComponent, VegBadgeComponent, SectionHeadingComponent, MenuItemCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly router = inject(Router);
  protected readonly config = inject(SITE_CONFIG);
  protected readonly wa = inject(WhatsappService);

  /** Bound from `?category=` by withComponentInputBinding(). */
  readonly category = input<string>();

  protected readonly categories = MENU;
  protected readonly all = ALL;

  protected readonly active = linkedSignal(() => {
    const requested = this.category();
    return requested && MENU.some((c) => c.id === requested) ? requested : ALL;
  });

  protected readonly visible = computed(() =>
    this.active() === ALL ? MENU : MENU.filter((c) => c.id === this.active()),
  );

  protected readonly totalDishes = MENU.reduce((n, c) => n + c.items.length, 0);

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Menu',
      description: `Pure-veg South Indian catering menu in ${this.config.address.city}: tiffins, Andhra banana-leaf meals, curries, rice varieties, snacks, sweets, festival specials and Jain options.`,
      path: 'menu',
    });
  }

  protected select(id: string): void {
    this.active.set(id);
    void this.router.navigate([], {
      queryParams: { category: id === ALL ? null : id },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
