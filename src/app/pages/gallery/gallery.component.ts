import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal, viewChild } from '@angular/core';
import { SITE_CONFIG } from '../../config/site.config';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { SeoService } from '../../core/services/seo.service';
import { GALLERY } from '../../data';
import { GalleryCategory } from '../../models';
import { CtaBannerComponent, ImageLightboxComponent, SectionHeadingComponent } from '../../shared';

type Filter = GalleryCategory | 'all';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'food', label: 'Food' },
  { id: 'events', label: 'Events' },
  { id: 'setup', label: 'Set-up' },
];

@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage, RevealOnScrollDirective, SectionHeadingComponent, ImageLightboxComponent, CtaBannerComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements OnInit {
  private readonly seo = inject(SeoService);
  protected readonly config = inject(SITE_CONFIG);
  private readonly lightbox = viewChild.required(ImageLightboxComponent);

  protected readonly filters = FILTERS;
  protected readonly active = signal<Filter>('all');
  protected readonly images = computed(() =>
    this.active() === 'all' ? GALLERY : GALLERY.filter((img) => img.category === this.active()),
  );

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Gallery',
      description: `Photos from ${this.config.name} events in ${this.config.address.city}: banana-leaf meals, buffet set-ups, live counters and festive sweets.`,
      path: 'gallery',
    });
  }

  protected select(filter: Filter): void {
    this.active.set(filter);
  }

  protected open(index: number): void {
    this.lightbox().open(index);
  }
}
