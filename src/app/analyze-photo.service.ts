import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { Http ,HttpModule} from '@angular/http';
import {RequestOptions} from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class AnalyzePhotoService {

  headers:any;
  options:any;
  public results:any = undefined;
  

  

   doPOST(imageString:string) {
    console.log("POST");

    let promise = new Promise((resolve, reject) => {
      //TODO
    

    // search faces API
    
    let url = 'https://lfg8ri9lce.execute-api.us-east-1.amazonaws.com/prod/';
    console.log(this.http.post(url, {image:imageString},this.options).toPromise());
    this.http.post(url, {image:imageString},this.options).toPromise()
    .then(
      res => { // Success
        //console.log(JSON.parse(res.json().body).message.FaceMatches[0]);
        //console.log(JSON.parse(res.json().body).message.FaceMatches[1]);
        
        if (JSON.parse(res.json().body).message.FaceMatches.length != 0) {
          let match = JSON.parse(res.json().body).message.FaceMatches[0];
          let thing = new Array();
          thing.push('match');
          thing.push(match.Face.ExternalImageId);
          thing.push(match.Face.Confidence);
          thing.push(match.Similarity);

          this.results = thing;
          resolve();
        }
        
        else {
          
         let url = 'https://pjlj7pfxgf.execute-api.us-east-1.amazonaws.com/prod/';
         this.http.post(url, {image:imageString},this.options).toPromise()
         .then(
           res => { // Success
             console.log(JSON.parse(res.json().body).message.FaceDetails[0]);
             
             let noMatch = JSON.parse(res.json().body).message.FaceDetails[0];
             let thing = new Array();
             thing.push(noMatch.Gender);
             thing.push(noMatch.AgeRange);
             thing.push(noMatch.Smile);
             thing.push(noMatch.Emotions);
             thing.push(noMatch.Beard);
             thing.push(noMatch.Eyeglasses);
             this.results = thing;
             resolve();
           }
         );
        }
     }
   );
  });
  return promise;
  }
  
  constructor(private http:Http, ) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', '*');
    this.headers.append('Access-Control-Expose-Headers', '*');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', '*');
    this.options = new RequestOptions({ headers: this.headers });
   }
}
