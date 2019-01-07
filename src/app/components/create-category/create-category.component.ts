import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';



@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  newCategory: Category;

  constructor(private router: Router,

    private categoryService: CategoryService) 
    
    {   
      this.newCategory= new Category();
    }

  ngOnInit() {
  }

/** if submit the form*/

onSubmit() {
  
  if (this.newCategory.name !== undefined) {
       this.categoryService.addCategory(this.newCategory).subscribe( //le retour est un observable qui est ici la réponse de l'api
       (data) =>{
        if (data.valid == true) {
          this.router.navigate(['/categories']);
        } 
      }
    );  
} 
}
}

