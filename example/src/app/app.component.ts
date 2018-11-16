import { Component, OnInit, ViewChild } from '@angular/core';
import { RoutingSignalService } from './routing-signal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor(private routingSignalService: RoutingSignalService) { }

  @ViewChild('top') elementToFocusAfterRouting;

	 ngOnInit() {
     this.routingSignalService.onRoute.subscribe( () => {
		    this.onRoute();
	 	 }) 
   }

	 onRoute() {
	   this.elementToFocusAfterRouting.nativeElement.focus(); 
   }

}
