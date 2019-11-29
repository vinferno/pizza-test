import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentDashboardRoutingModule } from './agent-dashboard-routing.module';
import { LookupHistoryComponent } from './lookup-history/lookup-history.component';
import { MemberLookupComponent } from './member-lookup/member-lookup.component';
import { TestMembersComponent } from './test-members/test-members.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ LookupHistoryComponent, MemberLookupComponent, TestMembersComponent],
  imports : [
    CommonModule,
    AgentDashboardRoutingModule,
    FormsModule
  ],
  providers: [],
})
export class AgentDashboardModule { }
