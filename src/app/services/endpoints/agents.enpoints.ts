import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiAgentEnabledCompanies {
  public config = {
    route: '/agents/enabled-companies',
    headers: {
      get: 'getValidateHeaders',
    },
  };
}
@Injectable({
  providedIn: 'root'
})
export class EndpointsAgents {
  constructor(
    public enabledCompanies: ApiAgentEnabledCompanies,
  ) {}
}
