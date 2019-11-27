import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ApiPostContentHeader } from './endpoints/request';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    private api: ApiService,
  ) { }

  getContentHeader() {
    return this.api.request(new ApiPostContentHeader(), {
      language: 'en',
      route: 'counselor/member-lookup'
    });
  }
}
