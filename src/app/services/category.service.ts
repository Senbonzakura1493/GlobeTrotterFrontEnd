import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Category } from 'src/app/classes/category';



@Injectable({
    providedIn: 'root'  
  })
  export class CategoryService{
    private url = "http://localhost/GlobeTrotter2/public/index.php/api";

  /**
  * service construction
  *
  * @param {HttpClient} http
  */
  constructor(private http: HttpClient) { }


  /**
  * All the categories
  *
  * @returns {Observable<Category[]>}
  */

  getCategories(): Observable<Category[]> { // va me renvoyer un observable de type array avec les categories
    return this.http.get<Category[]>(this.url + '/categories', { responseType: 'json' });
  }


   /**
  * Add a category
  *
  * @param {Category} category
  * @returns {Observable<any>}
  */
  
  addCategory(category: Category): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  return this.http.post<Category>(this.url + '/newCategory', category, httpOptions); // renvoie de l'observable qui est la réponse de l'api

  }
   /**
  * only a requested category
  *
  * @param {string} id
  * @returns {Observable<Category>}
  */
 findCategory(id: string): Observable<Category> {
  return this.http.get<Category>(this.url + '/category/' + id, { responseType: 'json' });
  }

  /**
  * Modify a specific category
  *
  * @param {number} id
  * @param {Category} category
  * @returns {Observable<any>}
  */
 putCategory(id: number, category: Category): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.put(this.url + '/editCategory/' + id, category, httpOptions)
}


}

  
  
  