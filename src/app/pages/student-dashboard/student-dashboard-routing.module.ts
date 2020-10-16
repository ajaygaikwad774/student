import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentDashboardPage } from './student-dashboard.page';

const routes: Routes = [
  {
    path: 'student',
    component: StudentDashboardPage,
    children: [
      {
        path: 'featured',
        children: [
          {
            path: '',
            loadChildren: () => import('./featured/featured.module').then(m => m.FeaturedPageModule)
          }
        ]

      },
      {
        path: 'jobs',
        children: [
          {
            path: '',
            loadChildren: () => import('./company-jobs/company-jobs.module').then(m => m.CompanyJobsPageModule)
          }
        ]
      },
      {
        path: 'courses',
        children: [
          {
            path: '',
            loadChildren: () => import('./my-courses/my-courses.module').then(m => m.MyCoursesPageModule)
          }
        ]
      },
      {
        path: 'institute',
        children: [
          {
            path: '',
            loadChildren: () => import('./institute/institute.module').then(m => m.InstitutePageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
          }
        ]
      },
      {
        path: 'feeds',
        loadChildren: () => import('./notify/notify.module').then(m => m.NotifyPageModule)
      },
      {
        path: '',
        redirectTo: '/student/featured',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/student/featured',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentDashboardPageRoutingModule { }
