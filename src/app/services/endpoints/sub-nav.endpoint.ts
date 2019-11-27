import { Injectable } from '@angular/core';
import { ApiEndpoint } from '../api-endpoint';

@Injectable ( {
  providedIn : 'root',
} )
export class SubNavEndpoint extends ApiEndpoint {

  public config = {
    route : '/client-manager',
    headers : {
      get : 'none',
      post : 'getValidateHeaders',
    },
  };
}
