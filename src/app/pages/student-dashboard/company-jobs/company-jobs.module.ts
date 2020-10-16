import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyJobsPageRoutingModule } from './company-jobs-routing.module';

import { CompanyJobsPage } from './company-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyJobsPageRoutingModule
  ],
  declarations: [CompanyJobsPage]
})
export class CompanyJobsPageModule {}
