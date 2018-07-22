import {ViewChild, Component, OnInit } from '@angular/core';
import { TravelPlaceService } from './travelplace.service';
import { TravelPlaces } from './travelplaces';
import * as Immutable from'immutable';

@Component({
  selector: 'app-travelplace',
  templateUrl: './travelplace.component.html',
  styleUrls: ['./travelplace.component.css']
})
export class TravelplaceComponent implements OnInit {
 allTravelPlaces : TravelPlaces[] = [{
    id: 1,
    name:'Mumbai',
    imagePath:'assets/images/img1.jpg',
    descriptionPath:null,
    parentId : null
  },{
    id: 2,
    name:'Mumbai',
    imagePath:'assets/images/img1.jpg',
    descriptionPath:null,
    parentId : null

  }];
  x : number = 0;
  currentImagePath : string = 'assets/images/img1.jpg';
  public imageUrlArray: string[] = ['assets/images/img1.jpg','assets/images/img2.jpg'];
  public imageUrl;
  statusCode : number;
  currentTravelPlaceImagePath : string = null;

displayImage() {
  this.x++;
  if (this.x >= this.imageUrlArray.length) {
    this.x = 0;
  }
  this.currentImagePath = this.imageUrlArray[this.x];
  setTimeout(this.displayImage(), 1000);
}

  //  constructor(private travelPlaceService : TravelPlaceService) { }
 constructor() {
//  setTimeout(this.changeImage(), 2000);
 }
  ngOnInit() : void {
    //this.getAllTravelPlaces();
   this.changeImage();
   this.displayImage();

   this.imageUrl = ['assets/images/img1.jpg','assets/images/img2.jpg'];



  }

/*  getAllTravelPlaces() {
    this.travelPlaceService.getAllTravelPlaces()
        .subscribe(
          data => this.allTravelPlaces = data,
          errorCode => this.statusCode = errorCode
        );
  }
*/
  changeImage() {
    this.allTravelPlaces.forEach ( (travelPlaces) => {
      //  setTimeout(2000);
        this.currentTravelPlaceImagePath = travelPlaces.imagePath;
    });

  }
}
