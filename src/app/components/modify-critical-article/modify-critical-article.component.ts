import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CriticalArticle } from 'src/app/classes/critical-article';
import { CriticalArticleService } from 'src/app/services/criticalArticle.service'
import{Category}from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';



@Component({
  selector: 'app-modify-critical-article',
  templateUrl: './modify-critical-article.component.html',
  styleUrls: ['./modify-critical-article.component.css']
})
export class ModifyCriticalArticleComponent implements OnInit {

   travel : CriticalArticle ;
   categories : Category[];

  /**
  * Construct the component
  *
  * @param {ActivatedRoute} route
  * @param {Router} router
  * @param {CategoryService} criticalArticleService
  */
  constructor(private criticalArticleService: CriticalArticleService,
    private router: Router,private route: ActivatedRoute,private categoryService: CategoryService, ) {

     }

  ngOnInit() {
    this.getTravel();
    this.getCategories();
  }


  /** call the service to get categories */
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
  
    /** call the service to get a specific travel */
  getTravel(){
    let id = this.route.snapshot.paramMap.get('id');
    this.criticalArticleService.findTravel(id).subscribe(
      (data) => {
        this.travel = data;
        console.log(data);      
      },
      (err) => {
        console.log(err);
      }
      );
  }

  
  /** call the service to put the travel */
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
         this.criticalArticleService.modifyTravel(this.travel.id,newtravel).subscribe( //le retour est un observable qui est ici la réponse de l'api
         (data) =>{
          if (data.valid == true) {
            this.router.navigate(['/criticalArticles']);
          }
        }
      );  
      }
  }
}
