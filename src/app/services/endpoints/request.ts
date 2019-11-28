import {
  ApiConfig,
  headersBasicWithFingerprint,
  headersGetTokenWithFingerprint,
  headersGetValidate,
  headersNone,
  methodGet,
  methodPost
} from '../api.service';

export const request = '';

export class ApiGetOperatingMode implements ApiConfig {
  route = '/auth/operating';
  headers = headersNone;
  method = methodGet;
}

export class ApiAgentLogin implements ApiConfig {
  route = '/auth/credentials/agent';
  headers = headersGetTokenWithFingerprint;
  method = methodPost;
}

// postContentHeader
export class ApiPostContentHeader implements ApiConfig {
  route = '/enrollment-dashboard/content-header';
  headers = headersGetValidate;
  method = methodPost;
}

// getAgentEnabledCompanies
export class ApiGetAgentEnabledCompanies implements ApiConfig {
  route = '/agents/enabled-companies';
  headers = headersGetValidate;
  method = methodGet;
}

// getClientManager
export class ApiGetClientManager implements ApiConfig {
  route = '/client-manager';
  headers = headersGetValidate;
  method = methodPost;
}

// getMemberSearchHistory
export class ApiGetMemberSearchHistory implements ApiConfig {
  route = '/agents/member-search-history';
  headers = headersGetValidate;
  method = methodGet;
}

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
  matchingMembers: LookupHistory[];
}
