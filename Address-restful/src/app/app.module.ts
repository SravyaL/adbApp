import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServiceListComponent } from './component/service-list/service-list.component';
import { ServiceDetailsComponent } from './component/service-details/service-details.component';
import { ServiceFormComponent } from './component/service-form/service-form.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { AdjustLengthPipe } from './pipe/adjust-length.pipe';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SuccessComponent } from './component/success/success.component';

const paths : Routes =[
  {path:'',component:DashboardComponent},
  {path:'listServices',component:ServiceListComponent},
   {path:'addService',component:ServiceFormComponent},
   {path:'success', component:SuccessComponent}
  // {path:'editContact/:id',component:ContactFormComponent},
  // {path:'viewContact/:id',component:ContactDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
   ServiceListComponent,
    ServiceDetailsComponent,
    ServiceFormComponent,
    DashboardComponent,
    SuccessComponent,
    AdjustLengthPipe
  
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
