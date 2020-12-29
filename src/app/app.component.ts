import { Component } from '@angular/core';

export interface Card {
  title?: string | number;
  text?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibility = true;

  cardCollection: Card[] = [
    {title: 1, text: 'some text'},
    {title: '2', text: 'some not text'},
    {title: 'here we go again', text: 'text but not'},
  ]

  setVisibility = () => {
    this.visibility = !this.visibility;
  }
}
