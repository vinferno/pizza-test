import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { AnotherComponent } from './another/another.component';
import { LookupHistoryComponent } from './lookup-history/lookup-history.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [

  {
    path: '',
    component: AgentDashboardComponent,
    children: [
      {path: 'member-lookup', component: AnotherComponent},
      {path: 'member-lookup', component: AnotherComponent},
      {path: 'lookup-history', component: LookupHistoryComponent},
      {path: '**', redirectTo: 'member-lookup'}
    ]
  },


];

@NgModule({
  imports : [ RouterModule.forChild ( routes ), CommonModule ],
  declarations: [AgentDashboardComponent],
  exports: [RouterModule, AgentDashboardComponent]
})
export class AgentDashboardRoutingModule { }
