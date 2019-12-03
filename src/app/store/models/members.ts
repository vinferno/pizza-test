export class LookupHistory {
  systemNumber: number;
  firstName: string;
  lastName: string;
  status: string;
  ssn: string;
  companyName: string;
  employeeID: string;
  payrollNumber: string;
  homeEmail: string;
  homePhone: string;
  birthDate: string;
  memberName: string;
  isVerified: boolean;
}
export class ResponseMemberSearchHistory {
  matchingMembers: LookupHistory[] = [new LookupHistory()];
}
