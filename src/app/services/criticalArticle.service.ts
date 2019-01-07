import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { CriticalArticle } from 'src/app/classes/critical-article';


@Injectable({
    providedIn: 'root'  
  })
  export class CriticalArticleService{
    private url = "http://localhost/GlobeTrotter2/public/index.php/api";

    /**
  * service construction
  *
  * @param {HttpClient} http
  */
  constructor(private http: HttpClient) { }

  /**
  * All the travel
  *
  * @returns {Observable<CriticalArticle[]>}
  */

  getTraveling(): Observable<CriticalArticle[]> {
    return this.http.get<CriticalArticle[]>(this.url + '/traveling', { responseType: 'json' });
  }

  /**
  * Add a travel
  *
  * @param {} travel
  * @returns {Observable<any>}
  */
  
 addTravel(travel): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  return this.http.post<CriticalArticle>(this.url + '/newTravel', travel, httpOptions); // renvoie de l'observable qui est la réponse de l'api

  }
 
  /**
  * Find a specific travel
  *
  * @param {string} id
  * @returns {Observable<CriticalArticle>}
  */
 findTravel(id: string): Observable<CriticalArticle> {
  return this.http.get<CriticalArticle>(this.url + '/travel/'+ id, { responseType: 'json' });
  }

  /**
  * Modify a specific travel
  *
  * @param {number} id
  * @param {} travel
  * @returns {Observable<any>}
  */
 modifyTravel(id: number, travel): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.put(this.url + '/editTravel/' + id, travel, httpOptions)
  }
/**
  * delete a specific travel
  *
  * @param {string} id
  * @returns {Observable<any>}
  */
  deleteTravel(id : string): Observable<any> {
    
    return this.http.delete(this.url + '/deleteTravel/'+ id);
  }
  }




