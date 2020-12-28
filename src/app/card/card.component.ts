import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  title = 'Card title';
  text = '';
  description = 'This is example of some text';
  pp: string = '';
  getInfoBlock = () => 'that it';
  handleChange = () => {
    this.title = this.text;
  };
  handleInput = (event: any) => {
    this.text = event.target.value;
  };

  ngOnInit(): void {
    this.pp = 'my_class';
  }
}
