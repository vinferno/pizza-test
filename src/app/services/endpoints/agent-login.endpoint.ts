import { Injectable } from '@angular/core';
import { ApiEndpoint } from '../api-endpoint';



@Injectable()
export class ApiAuthCredentialsAgentService extends ApiEndpoint {
  public config = {
    route: '/auth/credentials/agent',
    headers: {
      post: 'getTokenHeadersWithFingerprint',
    },
  };
}
