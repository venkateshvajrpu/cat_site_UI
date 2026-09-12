import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MenuItem, MenuTag } from '../../../models';

const TAG_LABELS: Record<MenuTag, string> = {
  signature: 'Signature',
  festival: 'Festival',
  jain: 'Jain',
  kids: 'Kids’ favourite',
  seasonal: 'Seasonal',
};

@Component({
  selector: 'app-menu-item-card',
  templateUrl: './menu-item-card.component.html',
  styleUrl: './menu-item-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemCardComponent {
  readonly item = input.required<MenuItem>();

  protected readonly tags = computed(() =>
    (this.item().tags ?? []).map((tag) => ({ tag, label: TAG_LABELS[tag] })),
  );
}
