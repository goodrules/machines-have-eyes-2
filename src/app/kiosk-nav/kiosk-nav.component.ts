import { Component, OnInit } from '@angular/core';
import { MaterialsModule } from "../materials.module";
import { Router } from "@angular/router";

@Component({
  selector: 'app-kiosk-nav',
  templateUrl: './kiosk-nav.component.html',
  styleUrls: ['./kiosk-nav.component.css']
})


export class KioskNavComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
  }

  //this.router.navigateByUrl('/user');
  navigateToUrl
  

}
