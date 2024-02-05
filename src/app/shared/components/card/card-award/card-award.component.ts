import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-award',
  templateUrl: './card-award.component.html',
  styleUrls: ['./card-award.component.scss']
})
export class CardAwardComponent {
  @Input() pathUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() text: string | undefined;
}
