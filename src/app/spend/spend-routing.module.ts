import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SpendListComponent } from '../spend/spend-list/spend-list.component';
//import { SpendDetailsComponent } from '../spend/spend-details/spend-details.component';
//import { SpendCreateComponent } from '../spend/spend-create/spend-create.component';
//import { SpendUpdateComponent } from '../spend/spend-update/spend-update.component';
//import { PatientDeleteComponent } from '../patients/patient-delete/owner-delete.component';

const patientRoutes: Routes = [
  { path: 'spends', component: SpendListComponent },
 // { path: 'details/:id', component: PatientDetailsComponent},
  //{ path: 'create', component: PatientCreateComponent },
  //{ path: 'update/:id', component: PatientUpdateComponent },
  //{ path: 'delete/:id', component: PatientDeleteComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(patientRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SpendRoutingModule { }
