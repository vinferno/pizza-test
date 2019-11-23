import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentDashboardRoutingModule } from './agent-dashboard-routing.module';
import { AnotherComponent } from './another/another.component';


@NgModule({
  declarations: [AnotherComponent],
  imports: [
    CommonModule,
    AgentDashboardRoutingModule
  ]
})
export class AgentDashboardModule { }
