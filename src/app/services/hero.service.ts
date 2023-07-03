import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Hero } from '../interface/Hero';
import { CreateHero } from '../interface/CreateHero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:8080/api/v1/heroes"


  getById(id: string): Observable<Hero> {
    return this.http.get<Hero>(this.apiUrl + "/" + id)
  }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl + "/all")
  }

  remove(id: string) {
    return this.http.delete(this.apiUrl + "/" + id)
  }

  create(hero: CreateHero): Observable<CreateHero> {
    return this.http.post<CreateHero>(this.apiUrl, hero)
  }

  update(id: string, hero: CreateHero) {
    return this.http.put<CreateHero>(this.apiUrl + "/" + id, hero);
  }

}
