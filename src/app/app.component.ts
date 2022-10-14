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

  imgUrl='https://m.media-amazon.com/images/M/MV5BNDkyZThhNmMtZDBjYS00NDBmLTlkMjgtNWM2ZWYzZDQxZWU1XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_UX128_CR0,12,128,176_AL_.jpg';
  imgWidth=100;

  attributeValue='movies-app-test-value';

  isApplied=true;
  multipleClasses="sample-bgcolor sample-color"

  bgColor="blueviolet";
  multipleStyles="background-color:black; color:white"

  TimeInConsole(){
    console.log(new Date());
  }

  timenow = new Date();
  TimeInWebpage(){
    this.timenow=new Date();
  }

  pColor='green';
  setTextColor(_color: string){
    console.log(_color);
    this.pColor=_color;
  }
}


