import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private api: ApiService) { }
  getOperating() {
    return this.api.getSessionOperatingMode();
  }
}
