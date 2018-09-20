import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }
  @ViewChild('componentHeading') elementToFocusOnInit;

  ngOnInit() {
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
