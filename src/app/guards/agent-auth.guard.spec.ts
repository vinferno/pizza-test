import { TestBed, async, inject } from '@angular/core/testing';

import { AgentAuthGuard } from './agent-auth.guard';

describe('AgentAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgentAuthGuard]
    });
  });

  it('should ...', inject([AgentAuthGuard], (guard: AgentAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
