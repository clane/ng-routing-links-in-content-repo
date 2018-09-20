import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  @ViewChild('componentHeading') elementToFocusOnInit;

  ngOnInit() {
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
