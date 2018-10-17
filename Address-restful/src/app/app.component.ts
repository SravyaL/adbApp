import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  logoUrl: string;
  field:string="speed";
  srchValue:number=0;
  constructor(
    private router:Router
  ){
    this.title="Tarangani Limited ";
    this.logoUrl="/assets/Images/adbLogo.png";
  }

  doSearch(){
    this.router.navigate(["/listServices"],{queryParams:{field:this.field,srchValue:this.srchValue}});
  }

  doChangeField(field,ele){
    this.field=field;
    this.srchValue=ele;
    switch(field){
      case 'speed': ele.placeholder="Speed";ele.type="number"; break;
      case 'maxUsage': ele.placeholder="Max Usage"; ele.type="number";break;
      case 'chargePM': ele.placeholder="Charge PM"; ele.type="number";break;
    }
  }
}
