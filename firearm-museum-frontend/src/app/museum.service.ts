import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import { Injectable } from '@angular/core';
import { Firearm } from './Firearm';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  baseURL : string = "http://localhost:8080/api";
  httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})}

  constructor(private http : HttpClient) { }

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
