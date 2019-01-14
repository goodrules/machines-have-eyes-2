import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {Observable, interval, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {AnalyzePhotoService} from '../analyze-photo.service';
import {Router} from '@angular/router';
import Typed from 'typed.js';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  private trigger: Subject<void> = new Subject<void>();
  public webcamImage: WebcamImage = null;
  public showWebcam = true;
  public loading:boolean = false;
  public counter:number = 3;
  public intervalObject:any;
  public showCountdown = false;

  
  constructor(public aps:AnalyzePhotoService, private router:Router) { 
    aps.results = {};

  }

  ngOnInit() {
  }

  hack(val) {
    return Array.from(val);
  }

  public handleTakePictureButton(){
    this.startCountdown();
  }

  public triggerSnapshot(): void {
    
    this.loading = true;
    this.trigger.next();
    this.toggleWebcam();

    this.aps.doPOST(this.webcamImage.imageAsBase64).then( ()=>{
      console.log('got some data boooooy');
      console.log(this.aps.results);
      this.loading = false;

      // show analyzing screen
      if(this.aps.results[0] == "match"){
        this.getMatch();
      } else{
        this.getPersonality();
      }
    });
    
  }

  // if no match
  public getPersonality(){
    var drink = "Beer";
    var res = this.aps.results;
    var sex = res[0].Value;
    var age = res[1].Low;
    var smile = false;
    if(res[2].Value == true && res[2].Confidence > 70){
      smile = true;
    }
    var emotion1 = res[3][0].Type + "("+Math.round(res[3][0].Confidence)+"%)";
    var emotion2 = res[3][1].Type + "("+Math.round(res[3][1].Confidence)+"%)";
    var emotion3 = res[3][2].Type + "("+Math.round(res[3][2].Confidence)+"%)";
    var facialHair = false;
    if(res[4].Value == true && res[4].Confidence > 80){
      facialHair = true;
    }
    var eyeglasses = false;
    if(res[5].Value == true && res[5].Confidence > 70){
      eyeglasses = true;
    }

    if(age < 21){
      age = "Under 21, ID Required";
      if(smile){
        if(facialHair){
          drink = "Sweet Sunrise";
        } else{
          drink = "Shirley Temple";
        }
      } else{
        drink = "Juice Getaway";
      }
    } else{
      if(sex == "Male"){
        // male track
        drink = "Beer";
          if(smile){
            if(facialHair){
              drink = "Beer";
              } else{
                if(eyeglasses){
                  drink = "Lightning Lex";
                } else {
                  drink = "Stormy Cloud";
                }
              }
            } else{
              if(facialHair){
                drink = "Whiskey Straight";
              } else{
                  drink = "Wine";
                }
            }
          }
        else{
        // female track
        drink = "Beer";
        if(smile){
          drink = "Wine";
        } else{
            if(eyeglasses){
              drink = "Silly Robot";
            } else{
              drink = "Lightning Lex";
            }
        }
    }

    
    }
    console.log("Sex = "+sex+" | age: "+age+" | smile: "+smile+" | emotion1: "+emotion1+" | emotion2: "+emotion2+" | emotion3: "+emotion3+" | facial hair: "+facialHair+" | glasses: "+eyeglasses);
    console.log("DRINK = "+drink);

    // show the info
    var options = {
      strings: ["Sex: "+sex, "Smiling: "+smile, "Emotion 1: "+emotion1,"Emotion 2: "+emotion2,"Emotion 3: "+emotion3,"Beard: "+facialHair, "Glasses: "+eyeglasses, "Estimated age: "+age, "Mapping data to drink menu...",".......... .......... ........... .........." ],
      typeSpeed: 30
    }
    
    var typed = new Typed(".element", options);
    setTimeout(() => {
      this.router.navigate(['thank-you', drink]); 
    }, 18000);
    //
  }

  // if match
  public getMatch(){
    var drink = "Beer";
    var res = this.aps.results;
    var pers = 'George P Burdell'
    var sim = 0.0
    if(res[1] == 'mike-goodman'){
      drink = "Bourbon"
      pers = 'Mike Goodman'
      sim = res[3]
    }
    if(res[1] == 'joe-depa'){
      drink = "Caipirinha"
      pers = 'Joe Depa'
      sim = res[3]
    }
    if(res[1] == 'jeff-sawyer'){
      drink = "Manhattan"
      pers = 'Jeff Sawyer'
      sim = res[3]
    }
    if(res[1] == 'carlos-gonzalez'){
      drink = "Vino"
      pers = 'Carlos Gonzalez'
      sim = res[3]
    }
    if(res[1] == 'john-preziotti'){
      drink = "Gin & Tonic"
      pers = 'John Preziotti'
      sim = res[3]
    }
    if(res[1] == 'jimmy-etheredge'){
      drink = "Bourbon on the Rocks"
      pers = "Jimmy Etheredge"
      sim = res[3]
    }
    if(res[1] == 'julie-sweet'){
      drink = "Diet Coke"
      pers = "Julie Sweet"
      sim = res[3]
    }
    if(res[1] == 'bud-peterson'){
      drink = "The Yellowjacket"
      pers = "Bud Peterson"
      sim = res[3]
    }
    if(res[1] == 'governor-deal'){
      drink = "Coke"
      pers = "Governor Nathan Deal"
      sim = res[3]
    }
    if(res[1] == 'mayor-bottoms'){
      drink = "Wine"
      pers = "Mayor Keisha Lance Bottoms"
      sim = res[3]
    }
    if(res[1] == 'hala-moddelmog'){
      drink = "Scotch on the Rocks"
      pers = "Hala Moddelmog"
      sim = res[3]
    }
    if(res[1] == 'david-hartnett'){
      drink = "Old Fashioned"
      pers = "David Hartnett"
      sim = res[3]
    }
    if(res[1] == 'cynthia-curry'){
      drink = "Wine"
      pers = "Cynthia Curry"
      sim = res[3]
    }
    
    //coke people
    if(res[1] == 'barry-simpson'){
      drink = "Coca-Cola"
      pers = "Barry Simpson"
      sim = res[3]
    }
    if(res[1] == 'martyn-crook'){
      drink = "Coca-Cola"
      pers = "Martyn Crook"
      sim = res[3]
    }
    if(res[1] == 'vinnie-dagostino'){
      drink = "Coca-Cola"
      pers = "Vinnie D'Agostino"
      sim = res[3]
    }
    if(res[1] == 'paula-dart'){
      drink = "Coca-Cola"
      pers = "Paula Dart"
      sim = res[3]
    }
    if(res[1] == 'ellen-duncan'){
      drink = "Coca-Cola"
      pers = "Ellen Duncan"
      sim = res[3]
    }
    if(res[1] == 'brett-findley'){
      drink = "Coca-Cola"
      pers = "Brett Findley"
      sim = res[3]
    }
    if(res[1] == 'sean-glowaski'){
      drink = "Coca-Cola"
      pers = "Sean Glowaski"
      sim = res[3]
    }
    if(res[1] == 'becky-hollaway'){
      drink = "Coca-Cola"
      pers = "Becky Hollaway"
      sim = res[3]
    }
    if(res[1] == 'adriana-knackfuss'){
      drink = "Coca-Cola"
      pers = "Adriana Knackfuss"
      sim = res[3]
    }
    if(res[1] == 'jim-marvel'){
      drink = "Coca-Cola"
      pers = "Jim Marvel"
      sim = res[3]
    }
    if(res[1] == 'robin-moore'){
      drink = "Coca-Cola"
      pers = "Robin Moore"
      sim = res[3]
    }
    if(res[1] == 'mariano-moro'){
      drink = "Coca-Cola"
      pers = "Mariano Moro"
      sim = res[3]
    }
    if(res[1] == 'pj-newcomb'){
      drink = "Coca-Cola"
      pers = "PJ Newcomb"
      sim = res[3]
    }
    if(res[1] == 'saurabh-parikh'){
      drink = "Coca-Cola"
      pers = "Saurabh Parikh"
      sim = res[3]
    }
    if(res[1] == 'greg-pharo'){
      drink = "Coca-Cola"
      pers = "Greg Pharo"
      sim = res[3]
    }
    if(res[1] == 'ethiraj-purushothaman'){
      drink = "Coca-Cola"
      pers = "Ethiraj Purushothaman"
      sim = res[3]
    }
    if(res[1] == 'bryan-weaver'){
      drink = "Coca-Cola"
      pers = "Bryan Weaver"
      sim = res[3]
    }
    if(res[1] == 'faisal-zanjani'){
      drink = "Coca-Cola"
      pers = "Faisal Zanjani"
      sim = res[3]
    }

    console.log("Name = "+pers);
    console.log("Drink = "+drink);
    console.log("Similarity = "+sim);

    // show the info
    var options = {
      strings: ["Name: "+pers, "Similarity: "+sim, "Mapping data to drink menu...",".......... .......... ........... .........." ],
      typeSpeed: 30
    }
    
    var typed = new Typed(".element", options);
    setTimeout(() => {
      this.router.navigate(['thank-you', drink]); 
    }, 12000);
    //
  }

  

  public startCountdown(){

   this.showCountdown = true;
    var source = interval(1000);
    //after 5 seconds, emit value
    var timer$ = timer(4000);
    //when timer emits after 5s, complete source
    const example = source.pipe(takeUntil(timer$));
    //output: 0,1,2,3
    const subscribe = example.subscribe(val => {
      this.counter--;
      console.log("counting down");
        if(this.counter <= 0){
       subscribe.unsubscribe();
        this.triggerSnapshot();
        this.counter = 3;
        this.showCountdown =false;

        }
    });
 
  }

  
  public triggerReset(): void {
    this.webcamImage = null;
    this.aps.results = {};
    this.showWebcam = true;
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    //console.log(webcamImage.imageAsBase64);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}
