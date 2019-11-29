// api request agentEnabledCompanies
export const ACTION_API_REQUEST_AGENT_ENABLED_COMPANIES = '[API] (request) agent-enabled-companies';
export class ActionApiRequestAgentEnabledCompanies {
    readonly type = ACTION_API_REQUEST_AGENT_ENABLED_COMPANIES;
    constructor(public payload?: any) {}
}
