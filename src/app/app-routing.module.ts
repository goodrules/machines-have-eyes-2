import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from "./welcome/welcome.component";
import { AttractComponent } from "./attract/attract.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ThankYouComponent } from "./thank-you/thank-you.component";

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, data: {state: 'welcome'} },
  { path: 'attract', component: AttractComponent, data: {state: 'attract'} },
  { path: 'experience', component: ExperienceComponent, data: {state: 'experience'} },
  { path: 'thank-you/:drink', component: ThankYouComponent, data: {state: 'thank-you'} },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
