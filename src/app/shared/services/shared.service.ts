import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  spinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }
  
  url = 'https://abudiyab-soft.com/api/';
  lang = sessionStorage.getItem('X-Localization') ?? 'en';

  headers = new HttpHeaders()
    .set('X-localization', sessionStorage.getItem('X-Localization') ?? 'en')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');


    getIsLoading(): Observable<boolean> {
      return this.spinner.asObservable();
    }
  
    setIsLoading(loading: boolean) {
      this.spinner.next(loading);
    }
  
    getCard(param?: any): Observable<any> {
      this.setIsLoading(true);
      return this.http.get(`${this.url}memberships`, { headers: this.headers }).pipe(
        tap(() => {
          this.setIsLoading(false);
        })
      );
    }

}
