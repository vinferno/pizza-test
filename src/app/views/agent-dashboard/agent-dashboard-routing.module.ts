import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { LookupHistoryComponent } from './lookup-history/lookup-history.component';
import { CommonModule } from '@angular/common';
import { MemberLookupComponent } from './member-lookup/member-lookup.component';
import { TestMembersComponent } from './test-members/test-members.component';


const routes: Routes = [

  {
    path: '',
    component: AgentDashboardComponent,
    children: [
      {path: 'member-lookup', component: MemberLookupComponent},
      {path: 'lookup-history', component: LookupHistoryComponent},
      {path: 'test-members', component: TestMembersComponent},
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
