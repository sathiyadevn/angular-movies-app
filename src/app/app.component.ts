import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app --> Title of App Component';

  today=new Date();

  price=98.7655555;

  sellingPrice= 100.50;


}
