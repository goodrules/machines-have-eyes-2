import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AttractComponent } from './attract/attract.component';
import { ExperienceComponent } from './experience/experience.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { MaterialsModule } from './/materials.module';
import { KioskNavComponent } from './kiosk-nav/kiosk-nav.component';
import {WebcamModule} from 'ngx-webcam';
import { routerTransition } from './router-animations';
import {AnalyzePhotoService} from './analyze-photo.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AttractComponent,
    ExperienceComponent,
    ThankYouComponent,
    KioskNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    WebcamModule,
    HttpModule
  ],
  providers: [AnalyzePhotoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

