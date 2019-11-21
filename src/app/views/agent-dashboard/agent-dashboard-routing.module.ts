import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentDashboardComponent } from '../agentDashboard/agent-dashboard/agent-dashboard.component';


const routes: Routes = [
  {path: '', component: AgentDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [AgentDashboardComponent],
  exports: [RouterModule, AgentDashboardComponent]
})
export class AgentDashboardRoutingModule { }
