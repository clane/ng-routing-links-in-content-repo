import { Component, OnInit, ViewChild } from '@angular/core';
import { RoutingSignalService } from '../routing-signal.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private routingSignalService: RoutingSignalService) { }

	@ViewChild('top') elementToFocusAfterRouting;

  ngOnInit() {
     this.routingSignalService.onRoute.subscribe( (e) => {
        this.onRoute(e);
     })
   }

   onRoute(e) {
        if(e){
           this.elementToFocusAfterRouting.nativeElement.textContent = "Top of " + e.target.innerText;
           this.elementToFocusAfterRouting.nativeElement.blur();
           this.elementToFocusAfterRouting.nativeElement.focus();
        }
   }


}
