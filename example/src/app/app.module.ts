import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'component1', component: Component1Component },
  { path: 'component2', component: Component2Component },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
];



@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
