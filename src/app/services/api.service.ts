import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ResponseOperating {
  operatingMode: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  log() {
  }
  getSessionOperatingMode() {
    console.log('working');
    return this.http.get<ResponseOperating>('http://localhost:7820/auth/operating');
  }
  login() {
    console.log('working');
    return this.http.post<ResponseOperating>('http://localhost:7820/auth/credentials/agent');
  }
}
