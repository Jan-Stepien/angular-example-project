import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NgRxDataService{

  randomNumberApi = 'http://numbersapi.com/';
  randomNumberApiOption = '/math';

  constructor(private http: HttpClient) {

  }

  getRandomNumberFact(num?: number): Observable<string>{
    let factNum = num ? num : Math.floor(Math.random()* (1000));
    return this.http.get<string>(this.randomNumberApi + factNum + this.randomNumberApiOption,
        {responseType: 'text' as 'json'});
  }


}
