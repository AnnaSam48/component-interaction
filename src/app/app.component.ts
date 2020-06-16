import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
pageTitle='Angular Component Interaction aka Weeping Angels';
imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI0eQJGSVrepJlc0-fN_ZB1lq0P_1bJOAf0Y31bBrHJIQl5Iaf&usqp=CAU'
blinkCount=0;
location :string;
name: string;
private _customerName: string;

@ViewChild('nameRef', {static:false}) nameElementRef: ElementRef;

ngAfterViewInit(){
  this.nameElementRef.nativeElement.focus();
  console.log(this.nameElementRef);
}

get customerName(): string{
  return this._customerName;
}

set customerName(value: string){
 this._customerName=value;
  if(value==='Semjonich'){
      alert("Well hello there, Semjon Semjonich!");
    }
}

incrementBlinks(){
  this.blinkCount+=1
  }

  getTheDoctor(){
  this.imageUrl='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1430596362l/23308491.jpg';
  }

  warn(updatedValue){
    this.name=updatedValue;
    if(updatedValue==='Numpties'){
      alert("Welcome back, Numpties!");
    }
  }
}
