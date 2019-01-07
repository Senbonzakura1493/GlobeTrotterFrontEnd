import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CriticalArticle } from 'src/app/classes/critical-article';
import { CriticalArticleService } from 'src/app/services/criticalArticle.service';
import { HttpClient } from '@angular/common/http'
import{Category}from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-create-critical-article',
  templateUrl: './create-critical-article.component.html',
  styleUrls: ['./create-critical-article.component.css']
})
export class CreateCriticalArticleComponent implements OnInit {

  travel: CriticalArticle;
  categories : Category[];

  constructor(private router: Router,

    private criticalArticleService: CriticalArticleService, private http: HttpClient,
    private categoryService: CategoryService) {

      this.travel= new CriticalArticle();
      
     }

  ngOnInit() {
    this.getCategories();
  }
  
/** call the service to get categories*/
  getCategories() {
  this.categoryService.getCategories().subscribe(
    (data) => {
      this.categories = data;
    },
    (err) => {
      console.log(err);
    }
  );
  }
 
  /** On submit create a critical-article 
   * call the service to post it in the database
  */
 onSubmit() {
  let newtravel = {
    
    'titre': this.travel.Titre,
    'destination': this.travel.Destination,
    'category': this.travel.category,
    'resume': this.travel.Resume,
    'place_to_visit':this.travel.PlaceToVisit,
    'date_time' : this.travel.DateTime
};

  if (newtravel.titre !== undefined && newtravel.destination!== undefined && newtravel.category!== undefined&&newtravel.resume!== undefined &&
    newtravel.place_to_visit!== undefined && newtravel.date_time !== undefined  ) {
       this.criticalArticleService.addTravel(newtravel).subscribe( //le retour est un observable qui est ici la réponse de l'api
       (data) =>{
        if (data.valid == true) {
          this.router.navigate(['/']);
        }
      }
    );  
    }
}

}
