import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { AnotherComponent } from './another/another.component';


const routes: Routes = [

  {path: 'member-lookup', component: AnotherComponent},
  {path: '**', redirectTo: 'member-lookup'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [AgentDashboardComponent],
  exports: [RouterModule, AgentDashboardComponent]
})
export class AgentDashboardRoutingModule { }
