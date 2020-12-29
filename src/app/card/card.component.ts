import { Component, Input, OnInit } from '@angular/core';

import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  title = 'Card title';
  text = 'text';
  pp: string = '';
  handleChange = () => {
    this.title = this.text;
  };
  handleInput = (event: any) => {
    this.text = event.target.value;
  };

  ngOnInit(): void {
    this.pp = 'my_class';
    console.log('card', this.card);
  }
}
