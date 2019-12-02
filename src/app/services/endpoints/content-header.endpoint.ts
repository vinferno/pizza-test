import { Injectable } from '@angular/core';

@Injectable()
export class ApiContentHeader {
  public config = {
    route: '/enrollment-dashboard/content-header',
    headers: {
      post: 'getValidateHeaders',
    },
  };
}
