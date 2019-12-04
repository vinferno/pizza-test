import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { LookupHistoryComponent } from './lookup-history/lookup-history.component';
import { CommonModule } from '@angular/common';
import { MemberLookupComponent } from './member-lookup/member-lookup.component';
import { TestMembersComponent } from './test-members/test-members.component';
import { ContentHeaderResolver } from '../../resolvers/content-header.resolver';


const routes: Routes = [

  {
    path: '',
    component: AgentDashboardComponent,
    children: [
      {path: 'member-lookup', component: MemberLookupComponent, resolve: [ContentHeaderResolver]},
      {path: 'lookup-history', component: LookupHistoryComponent, resolve: [ContentHeaderResolver]},
      {path: 'test-members', component: TestMembersComponent, resolve: [ContentHeaderResolver]},
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
