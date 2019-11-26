import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    private api: ApiService,
  ) { }

  getContentHeader() {
    return this.api.contentHeader.post({
      language: 'en',
      route: 'counselor/member-lookup'
    });

  }
}
