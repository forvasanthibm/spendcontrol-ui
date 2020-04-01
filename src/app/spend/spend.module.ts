import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { SpendListComponent } from './spend-list/spend-list.component';
import { SpendRoutingModule } from './spend-routing.module';
import { SpendDetailsComponent } from './spend-details/spend-details.component';
import { SpendCreateComponent } from './spend-create/spend-create.component';
import { SpendUpdateComponent } from './spend-update/spend-update.component';

@NgModule({
  imports: [
    CommonModule,
    SpendRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    SpendListComponent, 
    SpendDetailsComponent,
    SpendCreateComponent,
    SpendUpdateComponent
  ]
})
export class SpendModule { }
