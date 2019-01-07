import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';


import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CreateCriticalArticleComponent } from './components/create-critical-article/create-critical-article.component';
import { DisplayCategoriesComponent } from './components/display-categories/display-categories.component';
import { DisplayCriticalArticlesComponent } from './components/display-critical-articles/display-critical-articles.component';
import { ModifyCategoryComponent } from './components/modify-category/modify-category.component';
import { ModifyCriticalArticleComponent } from './components/modify-critical-article/modify-critical-article.component';
import {ModalComponentComponent} from './components/modal-component/modal-component.component';
const routes: Routes = [

{ path: '', redirectTo: '/criticalArticles', pathMatch: 'full' },

{ path: 'categories', component: DisplayCategoriesComponent }, // sur le path categories=> affichage des categories

{ path: 'category/:id', component: ModifyCategoryComponent },

{ path: 'newCategory', component: CreateCategoryComponent },

{ path: 'criticalArticles', component: DisplayCriticalArticlesComponent },

{ path: 'criticalArticle/:id', component: ModifyCriticalArticleComponent },

{ path: 'newCriticalArticle', component: CreateCriticalArticleComponent },

{ path: 'deleteCriticalComponent', component: ModalComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
