import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiAuthCredentialsAgentService } from './endpoints/agent-login.endpoint';
import { ApiContentHeader } from './endpoints/content-header.endpoint';

export interface ResponseOperating {
  operatingMode: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    public agentLogin: ApiAuthCredentialsAgentService,
    public contentHeader: ApiContentHeader,
  ) { }

  getSessionOperatingMode() {
    return this.http.get<ResponseOperating>('http://localhost:7820/auth/operating');
  }
  login(payload) {
    console.log('working');
    return this.agentLogin.post<ResponseOperating>(payload);
  }
}
