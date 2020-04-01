import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SpendListComponent } from '../spend/spend-list/spend-list.component';
import { SpendDetailsComponent } from '../spend/spend-details/spend-details.component';
import { SpendCreateComponent } from '../spend/spend-create/spend-create.component';
import { SpendUpdateComponent } from '../spend/spend-update/spend-update.component';

const patientRoutes: Routes = [
  { path: 'spends', component: SpendListComponent },
  { path: 'details/:id', component: SpendDetailsComponent},
  { path: 'create', component: SpendCreateComponent },
  { path: 'update/:id', component: SpendUpdateComponent },
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
