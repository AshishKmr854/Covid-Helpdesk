import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { HomeComponent } from './home/home.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StatisticComponent } from './statistic/statistic.component';
import { VaccinationComponent } from './vaccination/vaccination.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'hospitals',component:HospitalsComponent},
  {path:'ambulance', component:AmbulanceComponent},
  {path:'vaccination',component:VaccinationComponent},
  {path:'statistic',component:StatisticComponent},
  {path:'admin',component:AdminComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[AmbulanceComponent,
                              HomeComponent,
                              HospitalsComponent,
                              VaccinationComponent,
                              StatisticComponent,
                              AdminComponent,
                              PagenotfoundComponent,]
