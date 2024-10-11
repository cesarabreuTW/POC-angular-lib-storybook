import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.css',
})
export class ChipComponent {
  @Input() text = 'some text';
}
