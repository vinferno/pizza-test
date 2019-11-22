import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiAuthCredentialsAgentService } from './endpoints/agent-login.endpoint';

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
  ) { }
  log() {
  }
  getSessionOperatingMode() {
    console.log('working');
    return this.http.get<ResponseOperating>('http://localhost:7820/auth/operating');
  }
  login(payload) {
    console.log('working');
    return this.agentLogin.post<ResponseOperating>(payload);
  }
}