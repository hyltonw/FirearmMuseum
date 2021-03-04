import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import { Injectable } from '@angular/core';
import { Firearm } from './models/firearm';
import { Caliber } from './models/caliber';
import { HydratedFirearm } from './models/hydrated-firearm';
import { ActionType } from './models/action-type';
import { FirearmType } from './models/firearm-type';
import { FirearmTypeComponent } from './model-components/firearm-type/firearm-type.component';
import { Manufacturer } from './models/manufacturer';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  baseURL : string = "http://localhost:8080/api";
  httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})}

  constructor(private http : HttpClient) { 

  }

  getAllActionTypes() : Observable<ActionType[]> {
    return this.http.get<ActionType[]>(this.baseURL+"/actiontype")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : ActionType[] = [];
        return of(empty)
      })
    )
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

  getAllFirearmTypes() : Observable<FirearmType[]> {
    return this.http.get<FirearmType[]>(this.baseURL + "/firearmtype",this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : FirearmType[] = [];
        return of(empty)
      })
    )
  }

  getAllHydratedFirearms() : Observable<HydratedFirearm[]> {
    return this.http.get<HydratedFirearm[]>(this.baseURL + "/hydratedfirearm",this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : HydratedFirearm[] = [];
        return of(empty)
      })
    )
  }

  getAllManufacturers() : Observable<Manufacturer[]> {
    return this.http.get<Manufacturer[]>(this.baseURL + "/manufacturer",this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : Manufacturer[] = [];
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
