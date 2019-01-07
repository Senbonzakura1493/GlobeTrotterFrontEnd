import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service'

@Component({
  selector: 'app-display-categories',
  templateUrl: './display-categories.component.html',
  styleUrls: ['./display-categories.component.css']
})
export class DisplayCategoriesComponent implements OnInit {
  display: boolean = false;
  categories: Category[];
 
  /**
  * Construction of the component
  *
  * @param {CategoryService} categoryService
  * @param {Router} router
  */
  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
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

}
