import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import { Injectable } from '@angular/core';
import { Firearm } from './models/firearm';
import { Caliber } from './models/caliber';
import { HydratedFirearm } from './models/hydrated-firearm';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  baseURL : string = "http://localhost:8080/api";
  httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})}

  constructor(private http : HttpClient) { 

  }

  getAllCalibers() : Observable<Caliber[]> {
    return this.http.get<Caliber[]>(this.baseURL+"/caliber")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : Caliber[] = [];
        return of(empty)
      })
    )
  }

  getAllFirearms() : Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.baseURL + "/firearms")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : Firearm[] = [];
        return of(empty);
      })
    )
  }

  getAllHydratedFirearms() : Observable<HydratedFirearm[]> {
    return this.http.get<HydratedFirearm[]>(this.baseURL + "/hydratedfirearms",this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : HydratedFirearm[] = [];
        return of(empty)
      })
    )
  }
  
  addFirearm(toAdd : Firearm) : Observable<Firearm>{
    return this.http.post<Firearm>(this.baseURL+"/firearm/add", toAdd, this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    )
  }
}
