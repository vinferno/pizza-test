import { Injectable } from '@angular/core';



@Injectable()
export class ApiAuthCredentialsAgentService {
  public config = {
    route: '/auth/credentials/agent',
    headers: {
      post: 'getTokenHeadersWithFingerprint',
    },
  };
}
