import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { ServicePlans } from '../../service/plans.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title: string;
  logoUrl: string;
 
  services: Service[];
  msg : string;
  constructor(private plansService:ServicePlans,
    private activatedRoute:ActivatedRoute) {
    this.title = "Tarangani Limited ";
    this.logoUrl = "/assets/Images/adbLogo.png"; 
  
  }

  ngOnInit() {
    this.plansService.getAllServices().subscribe(
      (data) => this.services = data
    );
     this.activatedRoute.queryParams.subscribe(
       (params)=>{
        let title=params['id'];
        let operation=params['opt'];
       
      }
    );
  }
}
