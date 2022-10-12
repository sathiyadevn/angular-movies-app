import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit , OnChanges,AfterContentInit,AfterViewInit{

  constructor() { } 
  
  ngOnChanges(): void {
    console.log('ngOnChanges called.');
  }

  ngOnInit(): void {
    console.log('ngOnInit called.');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called.');
  }
   
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.');
  }


}
