import { Component, OnInit, Input,Inject } from '@angular/core';

import {
  MAT_DIALOG_DATA
} from "@angular/material";
import{ModalComponentService} from 'src/app/services/modalComponent.service'
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})

export class ModalComponentComponent implements OnInit {
 
  @Input('travelId') travelId :any;
  data :any;
  constructor(private modalComponentService: ModalComponentService,
    private router: Router,private route: ActivatedRoute) { //@Inject(MAT_DIALOG_DATA) public travelid: any
      
            //this.travelid= travelid;
    
   }
  
  //constructor(@Inject(MAT_DIALOG_DATA) public travelid: any) { // via injection

  //  this.travelid= travelid;

//}

  ngOnInit() {
  }

   /** call the service to delete the travel */
  onclick(){
   this.modalComponentService.deleteTravel(this.travelId).subscribe(
    (data) =>{
      if (data.valid == true) {
        window.location.reload();
        
      }
    }
  );  
  }
}

