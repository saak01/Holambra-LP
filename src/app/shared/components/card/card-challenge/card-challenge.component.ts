import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-challenge',
  templateUrl: './card-challenge.component.html',
  styleUrls: ['./card-challenge.component.scss']
})
export class CardChallengeComponent {
  @Input() pathUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() topics: Array<string> | undefined;
}
