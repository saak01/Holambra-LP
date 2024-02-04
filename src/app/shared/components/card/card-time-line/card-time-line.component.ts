import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-time-line',
  templateUrl: './card-time-line.component.html',
  styleUrls: ['./card-time-line.component.scss']
})
export class CardTimeLineComponent {
  @Input() date:string | undefined;
  @Input() text:string | undefined;
}
