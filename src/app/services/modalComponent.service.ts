import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'  
  })
  export class ModalComponentService{
    private url = "http://localhost/GlobeTrotter2/public/index.php/api";

    /**
  * service construction
  *
  * @param {HttpClient} http
  */
  constructor(private http: HttpClient) { }

 
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




