import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentAuthGuard } from './guards/agent-auth.guard';
import { ContentHeaderResolver } from './resolvers/content-header';


const routes: Routes = [
  {path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  {path: 'counselor', loadChildren: () => import('./views/agent-dashboard/agent-dashboard.module').then(m => m.AgentDashboardModule),
  canActivate: [AgentAuthGuard],
    resolve: [ContentHeaderResolver]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
