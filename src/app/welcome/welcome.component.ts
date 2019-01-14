import { Component, OnInit } from '@angular/core';
import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
import {Router} from '@angular/router';

const query = (s,a,o={optional:true})=>q(s,a,o);


export const welcomeTransition = trigger('welcomeTransition', [
  transition(':enter', [
    query('.block', style({ opacity: 0 })),
    query('.block', stagger(300, [
      style({ transform: 'translateY(100px)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('.block', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ])),        
  ])
]);

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [ welcomeTransition],
  host: {
    '[@welcomeTransition]':''
  }
})



export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  //data:image/jpeg;base64,

  

  ngOnInit() {
  }

}
