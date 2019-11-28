import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentDashboardRoutingModule } from './agent-dashboard-routing.module';
import { AnotherComponent } from './another/another.component';
import { LookupHistoryComponent } from './lookup-history/lookup-history.component';


@NgModule({
  declarations: [AnotherComponent, LookupHistoryComponent],
  imports: [
    CommonModule,
    AgentDashboardRoutingModule
  ],
  providers: [],
})
export class AgentDashboardModule { }
