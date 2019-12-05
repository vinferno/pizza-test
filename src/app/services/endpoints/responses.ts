export class ResponseSystemApiRequestOperating {
  operatingMode: string = '';
}

export class ResponseContentHeaderApiRequestClientManager {
  text: string;
  image: string;
  materialIconName: string;
  contentTitle: string;
  showContentHeader: boolean;
  contentTitleMWP: string;
}

class AgentTestMember     {
  systemNumber: 380941;
  firstName: 'BOB';
  lastName: 'ASP-TEST';
  status: 'ACTIVE';
  ssn: 'XXX-XX-5555';
  companyName: 'ADVANCED SERVICES INC';
  employeeID: '789078';
  payrollNumber: '';
  homeEmail: '';
  homePhone: '';
  birthDate: '7/30/1978';
  memberName: 'ASP-TEST, BOB';
  isVerified: false;
}
export class ResponseAgentApiRequestTestMembers {
  matchingMembers: AgentTestMember [

  ];
}

export class ResponseAgentApiRequestGetMemberSpecification {
  property: any;
}
