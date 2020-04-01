import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { SpendListComponent } from './spend-list/spend-list.component';
import { SpendRoutingModule } from './spend-routing.module';
//import { PatientDetailsComponent } from './send-details/spend-details.component';
//import { PatientCreateComponent } from './spend-create/spend-create.component';
//import { PatientUpdateComponent } from './spend-update/spend-update.component';
//import { PatientDeleteComponent } from './spend-delete/patient-delete.component';

@NgModule({
  imports: [
    CommonModule,
    SpendRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    SpendListComponent, 
  ]
})
export class SpendModule { }
