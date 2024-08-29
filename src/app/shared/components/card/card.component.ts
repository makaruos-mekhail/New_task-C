import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
  @Input() data: any;

  ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['data']) {
  //     console.log(this.data);
  //   }
  }
}
