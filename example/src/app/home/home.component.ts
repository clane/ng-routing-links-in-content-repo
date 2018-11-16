import { Component, OnInit, ViewChild } from '@angular/core';
import { RoutingSignalService } from '../routing-signal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routingSignalService: RoutingSignalService) {}

	routerLinkActivated() {
       this.routingSignalService.onRoute.emit();
    }

	//@ViewChild('componentHeading') elementToFocusOnInit;

  ngOnInit() {
	  //this.elementToFocusOnInit.nativeElement.focus();
  }

}
