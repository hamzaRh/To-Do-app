import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEventRequest, IEventResponse } from '../shared/models/models';
import { environment } from './../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}


  getEventsList(): Observable<any> {
    return this.http.get<IEventResponse[]>(this.url).pipe(
      catchError(error =>  this.errorHandler('Get Events List', error))
    );
  }

  getEvent(id: string): Observable<any> {
    return this.http.get<IEventResponse>(this.url+'/'+id).pipe(
      catchError(error =>  this.errorHandler('Get Event', error))
    );
  }

  addEvent(value: IEventRequest): Observable<any> {
    return this.http.post<IEventResponse>(this.url, value).pipe(
      catchError(error =>  this.errorHandler('Add Event', error))
    );
  }

  updateEvent(id: string, value: IEventRequest): Observable<any> {
    return this.http.put<IEventResponse>(this.url+'/'+id, value).pipe(
      catchError(error =>  this.errorHandler('Update Event', error))
    );
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(this.url+'/'+id).pipe(
      catchError(error =>  this.errorHandler('Delete Event', error))
    );
  }

  private errorHandler(msg: string, error: any): Observable<any> {
    console.log(msg + ': Error occured...', error);
    return throwError(error);
  }

}
