import { Component } from '@angular/core';
import { RoutingSignalService } from '../routing-signal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(
	private routingSignalService: RoutingSignalService
) { }

	routerLinkActivated(e) {
	  this.routingSignalService.onRoute.emit(e);
  }

}
