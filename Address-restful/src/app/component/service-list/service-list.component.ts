import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { ServicePlans } from '../../service/plans.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services:Service[];
  
 

  constructor(
    private service:ServicePlans
, private activatedRoute : ActivatedRoute  ) {
    
   }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params) =>{
        let field = params['field'];
        let srchValue = params['srchValue'];

        console.log(field +":"+srchValue);

        if(field && srchValue){
          this.service.searchServices(field,srchValue).subscribe(
            (data) => this.services=data,
            (err)=>this.services=undefined
          );
        }else{
          this.service.getAllServices().subscribe(
            (data) => this.services=data,
            (err)=>this.services=undefined
          );
        }
      }
    );
    
  }

}
