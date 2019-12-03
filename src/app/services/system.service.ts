import { Injectable } from '@angular/core';
import { ApiService, ResponseOperating } from './api.service';
import { FormService } from './form.service';
import { ApiGetOperatingMode } from './endpoints/request';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(
    private api: ApiService,
    public formService: FormService,
  ) {
  }
  public systemApiRequestOperating(payload) {
    console.log('apiRequest operating');
    return this.api.request<ResponseOperating>(new ApiGetOperatingMode());
  }
}

