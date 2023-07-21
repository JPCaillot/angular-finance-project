import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TotalComponent } from './dashboard/total/total.component';
import { MonthComponent } from './dashboard/month/month.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: ':user', component: DashboardComponent, children: [
      {
        path: 'overview', component: TotalComponent
      },
      {
        path: ':month', component: MonthComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
