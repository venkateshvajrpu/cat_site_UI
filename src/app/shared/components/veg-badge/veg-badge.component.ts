import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-veg-badge',
  templateUrl: './veg-badge.component.html',
  styleUrl: './veg-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VegBadgeComponent {
  readonly label = input('100% Pure Veg');
  readonly showLabel = input(true);
  readonly size = input<'sm' | 'md' | 'lg'>('md');
}
