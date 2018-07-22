import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import { TravelPlaces } from './travelplaces';

@Injectable()
export class TravelPlaceService {

allTravelPlacesUrl = "http://localhost:8080/getAllTravelPlaces";

constructor(private http:Http) {
}

/*getAllTravelPlaces(): Observable<TravelPlaces[]> {
  return this.http.get(this.allTravelPlacesUrl)
                  .map(this.extractData)
                  .catch(this.handleError);
}

private extractData(res: Response) {
      let body = res.json();
      return body;
  }
  private handleError (error: Response | any) {
      console.error(error.message || error);
      return Observable.throw(error.status);
  }

*/
}
