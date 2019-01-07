import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service'
import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.component.html',
  styleUrls: ['./modify-category.component.css']
})
export class ModifyCategoryComponent implements OnInit {

  category: Category;

  
  /**
  * Construct the component
  *
  * @param {ActivatedRoute} route
  * @param {Router} router
  * @param {CategoryService} categoryService
  */
  constructor(private route: ActivatedRoute,
              private router: Router,
private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategory();
  }

   /** call the service to get the categories*/
   getCategory() {
    let id = this.route.snapshot.paramMap.get('id'); //get the id
    this.categoryService.findCategory(id).subscribe(// id as parameter passed to the service
      (data) => {
        this.category = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /**  event onSubmit : call the service to put the category */
  onSubmit() {
    if (this.category.name.length !== 0) {
      this.categoryService.putCategory(this.category.id, this.category).subscribe(
        (data) => {
          if (data.valid === true) {
            this.router.navigate(['/categories']);
          } 
        }
      );
    } 
}

}
