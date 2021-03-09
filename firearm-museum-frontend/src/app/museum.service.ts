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
import { Action } from 'rxjs/internal/scheduler/Action';

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

  addCaliber(toAdd : Caliber) : Observable<Caliber>{
    console.log(this.baseURL+"/caliber/add");
    return this.http.post<Caliber>(this.baseURL+"/caliber/add", toAdd)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  editCaliber(toEdit : Caliber, id : number) : Observable<Caliber>{
    console.log(this.baseURL+"/caliber/edit/"+id,toEdit);
    return this.http.post<Caliber>(this.baseURL+"/caliber/edit/"+id,toEdit)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    )
  }

  removeCaliber(id : number) : Observable<Caliber>{
    return this.http.delete<Caliber>(this.baseURL+"/caliber/remove/"+id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    )
  }

  addActionType(toAdd : ActionType) : Observable<ActionType>{
    return this.http.post<ActionType>(this.baseURL+"/actiontype/add", toAdd)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    )
  }

  editActionType(toEdit : ActionType, id : number) : Observable<ActionType>{
    return this.http.post<ActionType>(this.baseURL+"/actiontype/edit/"+id, toEdit)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    )
  }

  removeActionType(id : number) : Observable<ActionType>{
    return this.http.delete<ActionType>(this.baseURL+"/actiontype/remove/"+id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    )
  }

  addHydratedFirearm(toAdd : HydratedFirearm) : Observable<HydratedFirearm>{
    return this.http.post<HydratedFirearm>(this.baseURL+"/hydratedfirearm/add",toAdd)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    )
  }

  editFirearm(toEdit : Firearm, id : number):Observable<string>{
    console.log(toEdit);
    return this.http.post<string>(this.baseURL+"/firearm/edit/"+id, toEdit)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    )
  }

  removeFirearm(id : number){
    return this.http.delete<Firearm>(this.baseURL+"/firearm/remove/"+id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    )
  }

  addManufacturer(toAdd : Manufacturer) : Observable<Manufacturer>{
    console.log(this.baseURL+"/manufacturer/add");
    return this.http.post<Manufacturer>(this.baseURL+"/manufacturer/add", toAdd)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  editManufacturer(toEdit : Manufacturer, id : number) : Observable<Manufacturer>{
    return this.http.post<Manufacturer>(this.baseURL+"/manufacturer/edit/"+id, toEdit)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    )
  }

  removeManufacturer(id : number) : Observable<Manufacturer>{
    return this.http.delete<Manufacturer>(this.baseURL+"/manufacturer/remove/"+id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    )
  }
}
