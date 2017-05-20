import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormationListComponent } from './formation-list/formation-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormationRoutingModule
  ],
  declarations: [DashboardComponent, FormationListComponent]
})
export class FormationModule { }
