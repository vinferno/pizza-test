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
