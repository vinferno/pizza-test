import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { AnotherComponent } from './another/another.component';


const routes: Routes = [
  {path: '', component: AgentDashboardComponent},
  {path: 'another', component: AnotherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [AgentDashboardComponent],
  exports: [RouterModule, AgentDashboardComponent]
})
export class AgentDashboardRoutingModule { }
