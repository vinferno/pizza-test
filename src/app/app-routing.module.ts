import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  {path: 'agent-dashboard', loadChildren: () => import('./views/agent-dashboard/agent-dashboard.module').then(m => m.AgentDashboardModule)},
  {path: '', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
