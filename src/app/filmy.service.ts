import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { isAndroid } from 'tns-core-modules/platform';
import { Film } from './film-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private baseUrl: String = 'http://127.0.0.1:8000/';
  private token: String = '2f769e9378362d5c7da628fb7fdb37489f13942d';
  private httpHeaders = new HttpHeaders(
    { 'Authorization': `Token ${this.token}` }
  );

  constructor(private http: HttpClient) {
    if (isAndroid) {
      this.baseUrl = 'http://10.0.2.2:8000/';
    }

  }

  allMovies(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}api/filmy/`, { headers: this.httpHeaders });
  }

  getMovie(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}api/filmy/${id}/`, { headers: this.httpHeaders });
  }
}
