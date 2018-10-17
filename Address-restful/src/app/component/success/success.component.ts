import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { ServicePlans } from '../../service/plans.service';

@Component({
  selector: 'app-contact',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  user:User;
  constructor( private service:ServicePlans
    , private activatedRoute : ActivatedRoute  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params) =>{
        let id = params['id'];
        this.service.saveUser(id).subscribe(
          (data) => this.user=data,
          (err)=>this.user=undefined
        );
      });
  }

}
