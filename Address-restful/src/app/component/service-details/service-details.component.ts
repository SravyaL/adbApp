import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { ServicePlans } from '../../service/plans.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  service: Service;
  ladyLogo: string;
  gentLogo: string;
  constructor(private cService: ServicePlans,
    private activatedRoute: ActivatedRoute
  ) {
 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        let title = params['id'];
        if (title) {
          this.cService.getServiceById(title).subscribe(
            (data) => this.service = data
          );
        }
      }
    );
  }

}
