import { Injectable } from '@angular/core';
import { ApiEndpoint } from '../api-endpoint';

@Injectable({
  providedIn: 'root'
})
export class ApiAgentEnabledCompanies extends ApiEndpoint {
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
