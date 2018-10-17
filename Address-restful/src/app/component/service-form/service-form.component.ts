import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { ServicePlans } from '../../service/plans.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  service: Service;
  isEditing: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cService: ServicePlans,
    private router: Router
  ) { }

  ngOnInit() {
    this.service = new Service();
    this.isEditing = false;

    this.activatedRoute.params.subscribe(
      (params) => {
        let title = params['id'];
        if (title) {
          this.cService.getServiceById(title).subscribe(
            (data) => {
              this.service = data;
              this.isEditing = true;
            }
          );
        }
      }
    );
  }

  save() {
    (data) => {
      this.router.navigate(['success/']);
    }


  }

}
