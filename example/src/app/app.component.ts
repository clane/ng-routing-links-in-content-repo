import { Component, OnInit } from '@angular/core';
import { RoutingSignalService } from './routing-signal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})

export class AppComponent implements OnInit {
  title = 'app';

	constructor(private routingSignalService: RoutingSignalService) { }

	 ngOnInit() {
     this.routingSignalService.onRoute.subscribe( () => {
		    this.onRoute();
	 	 }) 
   }

	 onRoute() {
	    alert('onRoute'); 
   }

}
