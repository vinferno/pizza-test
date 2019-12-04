import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtModeService {
  public convertedValues = {
    operatingMode: 'Art Mode',
    routes: [    {
      textForDisplay: 'Member Lookup',
      routeValue: '/counselor/member-lookup'
    },
      {
        textForDisplay: 'Lookup History',
        routeValue: '/counselor/lookup-history'
      },
      {
        textForDisplay: 'Test Members',
        routeValue: '/counselor/test-members'
      }],
    displayType: 'tabs',
    agentCompanies: [
      {
        companyID: -174,
        code: 'ACUST',
        companyName: 'TEST COMPANY STAFF'
      },
      {
        companyID: -116,
        code: 'ASINCT',
        companyName: 'TEST COMPANY SERVICES INC'
      },
      {
        companyID: -278,
        code: 'APDT',
        companyName: 'TEST COMPANY DEVELOPMENT'
      },
      {
        companyID: -50,
        code: 'GSBCT',
        companyName: 'TEST COLLEGE OF SOMETHING'
      },
    ],
    matchingMembers: [
      {
        systemNumber: 428544,
        firstName: 'TEST',
        lastName: 'TESTER 2',
        status: 'ACTIVE',
        ssn: 'XXX-XX-6789',
        companyName: 'DEV CORP',
        employeeID: '123456',
        payrollNumber: '12345678',
        homeEmail: 'test@email.com',
        homePhone: '',
        birthDate: '1/1/1990',
        memberName: 'TEST TESTER',
        isVerified: false
      },
      {
        systemNumber: 428544,
        firstName: 'TEST',
        lastName: 'TESTER 2',
        status: 'ACTIVE',
        ssn: 'XXX-XX-6789',
        companyName: 'DEV CORP',
        employeeID: '123456',
        payrollNumber: '12345678',
        homeEmail: 'test@email.com',
        homePhone: '',
        birthDate: '1/1/1990',
        memberName: 'TEST TESTER 2',
        isVerified: false
      },
      {
        systemNumber: 428544,
        firstName: 'TEST',
        lastName: 'TESTER',
        status: 'ACTIVE',
        ssn: 'XXX-XX-6789',
        companyName: 'DEV CORP',
        employeeID: '123456',
        payrollNumber: '12345678',
        homeEmail: 'test@email.com',
        homePhone: '',
        birthDate: '1/1/1990',
        memberName: 'TEST TESTER 3',
        isVerified: false
      },
    ]
  };

  constructor() { }

  getResponse(response) {
    const artModeResponse = new response();
    const keys = Object.keys(artModeResponse);
    keys.forEach( key => {
      console.log('key Before:', key , artModeResponse[key]);
      if (this.convertedValues.hasOwnProperty(key)) {
        artModeResponse[key] = this.convertedValues[key];
      }
      console.log('key After:', key , artModeResponse[key]);
    });
    return artModeResponse;
  }
}
