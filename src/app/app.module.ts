import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from "@angular/material";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CreateCriticalArticleComponent } from './components/create-critical-article/create-critical-article.component';
import { DisplayCategoriesComponent } from './components/display-categories/display-categories.component';
import { DisplayCriticalArticlesComponent } from './components/display-critical-articles/display-critical-articles.component';
import { ModifyCategoryComponent } from './components/modify-category/modify-category.component';
import { ModifyCriticalArticleComponent } from './components/modify-critical-article/modify-critical-article.component';
import {ModalComponentComponent}from './components/modal-component/modal-component.component';;



@NgModule({
  declarations: [
    AppComponent,
    
    CreateCategoryComponent,
    CreateCriticalArticleComponent,
    DisplayCategoriesComponent,
    DisplayCriticalArticlesComponent,
    ModifyCategoryComponent,
    ModifyCriticalArticleComponent,
    ModalComponentComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
