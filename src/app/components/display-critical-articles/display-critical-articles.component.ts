import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CriticalArticle } from 'src/app/classes/critical-article';
import { CriticalArticleService } from 'src/app/services/criticalArticle.service'
import { ModalComponentComponent } from 'src/app/components/modal-component/modal-component.component';
import{Inject} from '@angular/core';
import {
  MatDialog,
  MatDialogConfig
} from "@angular/material";

@Component({
  selector: 'app-display-critical-articles',
  templateUrl: './display-critical-articles.component.html',
  styleUrls: ['./display-critical-articles.component.css']
})
export class DisplayCriticalArticlesComponent implements OnInit {

  traveling: CriticalArticle[];
  travelID : any;
  display : boolean =false ;
  
 
  /**
  * @param {CriticalArticleService} criticalArticleService
  * @param {Router} router
  */
  constructor(private criticalArticleService: CriticalArticleService,
    private router: Router ,private route: ActivatedRoute,
    private dialog: MatDialog) { }
//
  ngOnInit() {
    this.getTraveling();
  }


 /** call the service to get Critical Articles */
 getTraveling() {
  this.criticalArticleService.getTraveling().subscribe(
    (data) => {
      this.traveling = data;
    },
    (err) => {
      console.log(err);
    }
  );
}
onclick(){
  this.display =true ;
}

 /** Open a dialog window in the component */
openDialog() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = this.travelID;
  this.dialog.open(ModalComponentComponent, dialogConfig);
}
}
