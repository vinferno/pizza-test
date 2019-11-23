import { Injectable } from '@angular/core';
import { ApiEndpoint } from '../api-endpoint';



@Injectable()
export class ApiContentHeader extends ApiEndpoint {
  public config = {
    route: '/enrollment-dashboard/content-header',
    headers: {
      post: 'getValidateHeaders',
    },
  };
}
