import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyJobsPage } from './company-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyJobsPageRoutingModule {}
