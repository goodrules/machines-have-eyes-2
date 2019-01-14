import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { timeout } from "rxjs/operators";

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  public drinkName = "";
  public ingredients = "";
  public description = "";
  public image = "";

  constructor(private router: Router,private route: ActivatedRoute) { 
    this.route.params.subscribe( params => {
      console.log(params.drink)

      switch(params.drink){
        case "Stormy Cloud":
          this.drinkName = "STORMY CLOUD (mixi)";
          this.ingredients = "Whiskey | Coca-Cola";
          this.description = "Everything is better with Coke.";
          this.image = "../../assets/images/stormy-cloud.svg";
          break;
        case "Lightning Lex":
          this.drinkName = "LIGHTNING LEX (mixi)";
          this.ingredients = "Whiskey | Cranberry Juice | Ginger Ale";
          this.description = "Duh duh duh duh duh duh duh duh duh duh duh... wait, that's Batman.";
          this.image = "../../assets/images/lightning-lex.svg";
          break; 
        case "Silly Robot":
          this.drinkName = "SILLY ROBOT (mixi)";
          this.ingredients = "Vodka | Cranberry Juice | Grapefruit Juice";
          this.description = "Silly robot, Trix are for kids.";
          this.image = "../../assets/images/silly-robot.svg";
          break;
        case "Sweet Sunrise":
          this.drinkName = "SWEET SUNRISE (mixi)";
          this.ingredients = "Orange Juice | Grenadine";
          this.description = "Good morning!";
          this.image = "../../assets/images/sweet-sunrise.svg";
          break; 
        case "Shirley Temple":
          this.drinkName = "SHIRLEY TEMPLE (mixi)";
          this.ingredients = "Grenadine | Ginger Ale";
          this.description = "Make it a double.";
          this.image = "../../assets/images/lightning-lex.svg";
          break;
        case "Juice Getaway":
          this.drinkName = "JUICE GETAWAY (mixi)";
          this.ingredients = "Orange Juice | Cranberry Juice | Grapefruit Juice";
          this.description = "Ruuuuun!";
          this.image = "../../assets/images/juice-getaway.svg";
          break;
        case "Whiskey Straight":
          this.drinkName = "WHISKEY STRAIGHT";
          this.ingredients = "Whiskey | Whiskey";
          this.description = "Make it a double.";
          this.image = "../../assets/images/stormy-cloud.svg";
          break;
        case "Beer":
          this.drinkName = "BEER";
          this.ingredients = "Water | Yeast | Hops | Grain";
          this.description = "Beer... Now there's a temporary solution.";
          this.image = "../../assets/images/beer.svg";
          break;
        case "Wine":
          this.drinkName = "WINE";
          this.ingredients = "Lots of grapes";
          this.description = "Give me more wine or leave me alone.";
          this.image = "../../assets/images/wine.svg";
          break; 
        case "Bourbon":
          this.drinkName = "BOURBON";
          this.ingredients = "Whiskey | Whiskey";
          this.description = "No regrets... that's my motto.";
          this.image = "../../assets/images/whiskey-rocks.svg";
          break; 
        case "Caipirinha":
          this.drinkName = "CAIPIRINHA";
          this.ingredients = "Cachaça | Sugar | Lime";
          this.description = "Brazil Yaaaay";
          this.image = "../../assets/images/stormy-cloud.svg";
          break; 
        case "Manhattan":
          this.drinkName = "MANHATTAN";
          this.ingredients = "Whistlepig | Sweet Vermouth | Bitters | Extra Cherries";
          this.description = "Shaken, not stirred.";
          this.image = "../../assets/images/manhattan2.svg";
          break; 
        case "Vino":
          this.drinkName = "VINO";
          this.ingredients = "Spanish Grapes";
          this.description = "Because why not.";
          this.image = "../../assets/images/wine.svg";
          break; 
        case "Gin & Tonic":
          this.drinkName = "GIN & TONIC";
          this.ingredients = "Gin | Tonic";
          this.description = "To Gin or not to Gin, silly question?";
          this.image = "../../assets/images/juice-getaway.svg";
          break; 
        case "Bourbon on the Rocks":
          this.drinkName = "BOURBON ON THE ROCKS";
          this.ingredients = "Pappy 18 | Ice";
          this.description = "Any questions?";
          this.image = "../../assets/images/whiskey-rocks.svg";
          break;
        case "Scotch on the Rocks":
          this.drinkName = "SCOTCH ON THE ROCKS";
          this.ingredients = "Johnny Walker Blue | Ice";
          this.description = "Pinkies up.";
          this.image = "../../assets/images/whiskey-rocks.svg";
          break;
        case "Diet Coke":
          this.drinkName = "DIET COKE";
          this.ingredients = "Diet Coke | Ice";
          this.description = "Time for a Diet Coke break.";
          this.image = "../../assets/images/coke.svg";
          break;
        case "Coca-Cola":
          this.drinkName = "COCA-COLA";
          this.ingredients = "Coke | Ice";
          this.description = "The Classic.  The most refreshing.";
          this.image = "../../assets/images/coke2.png";
          break;
        case "Old Fashioned":
          this.drinkName = "OLD FASHIONED";
          this.ingredients = "Bourbon | Angostura Bitters | Sugar | Club Soda";
          this.description = "For the man that likes to keep things simple. Did you know the Old Fashioned is one of the world’s oldest cocktails? Of course you did.";
          this.image = "../../assets/images/old-fashioned.svg";
          break; 
    
      }

      

    });

    
  }

  ngOnInit() {
    /*var thing = setTimeout(() => {
      this.router.navigate(['welcome']); 
      thing = null;
      console.log("resseting to front bitch");
    }, 20000);
    */
  }

}
