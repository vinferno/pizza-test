import {
  ApiConfig,
  headersBasicWithFingerprint,
  headersGetTokenWithFingerprint,
  headersGetValidate,
  headersNone,
  methodGet,
  methodPost
} from '../api.service';
import {systemModel} from "../../store/models/system.models";
import {ClientManagerState} from "../../store/reducers/client-manager.reducer";

export const request = '';

export class ApiGetOperatingMode implements ApiConfig {
  route = '/auth/operating';
  headers = headersNone;
  method = methodGet;
  responseType = systemModel
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
  responseType = ClientManagerState;
}

// getMemberSearchHistory
export class ApiGetMemberSearchHistory implements ApiConfig {
  route = '/agents/member-search-history';
  headers = headersGetValidate;
  method = methodGet;
}

// getAgentTestMembers
export class ApiGetAgentTestMembers implements ApiConfig {
  route = '/members/test-members';
  headers = headersGetValidate;
  method = methodGet;
}
