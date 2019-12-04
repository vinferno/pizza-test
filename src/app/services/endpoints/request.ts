import { ApiConfig, headersGetTokenWithFingerprint, headersGetValidate, headersNone, methodGet, methodPost } from '../api.service';
import { SystemModel } from '../../store/models/system.models';
import { ClientManagerState } from '../../store/reducers/client-manager.reducer';
import { ResponseContentHeaders } from '../../responses';
import { AgentEnabledCompanies, EnabledCompanies, ResponseAgentApiRequestAgentLogin } from '../../store/models/agent';
import { ResponseMemberSearchHistory } from '../../store/models/members';
import { ResponseAgentApiRequestTestMembers } from './responses';

export const request = '';

export class ApiGetOperatingMode implements ApiConfig {
  route = '/auth/operating';
  headers = headersNone;
  method = methodGet;
  responseType = SystemModel;
}

export class ApiAgentLogin implements ApiConfig {
  route = '/auth/credentials/agent';
  headers = headersGetTokenWithFingerprint;
  method = methodPost;
  responseType = ResponseAgentApiRequestAgentLogin;
}

// postContentHeader
export class ApiPostContentHeader implements ApiConfig {
  route = '/enrollment-dashboard/content-header';
  headers = headersGetValidate;
  method = methodPost;
  responseType = ResponseContentHeaders;
}

// getAgentEnabledCompanies
export class ApiGetAgentEnabledCompanies implements ApiConfig {
  route = '/agents/enabled-companies';
  headers = headersGetValidate;
  method = methodGet;
  responseType = AgentEnabledCompanies;
}

// getClientManager
export class ApiGetClientManager implements ApiConfig {
  route = '/client-manager';
  headers = headersGetValidate;
  method = methodPost;
  responseType = ClientManagerState;
}

// getMemberSearchHistory
export class ApiGetMemberSearchHistory implements ApiConfig {
  route = '/agents/member-search-history';
  headers = headersGetValidate;
  method = methodGet;
  responseType = ResponseMemberSearchHistory;
}

// getAgentTestMembers
export class ApiGetAgentTestMembers implements ApiConfig {
  route = '/members/test-members';
  headers = headersGetValidate;
  method = methodPost;
  responseType = ResponseAgentApiRequestTestMembers;
}


