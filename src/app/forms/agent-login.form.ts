import {isFormGroup} from './form.consts';
import { Validators } from '@angular/forms';

export const AgentLoginForm = {
  username : ['hgs.vinson.fernandez', Validators.compose( [ Validators.maxLength(3) ] )],
  password : ['password1'],
  reCaptcha : [true],
  agentLocation : ['L'],
  adminDirectSystem : ['C'],
  location : [isFormGroup, {
                            adminCity: ['fresno', Validators.compose( [ Validators.maxLength(3) ] )],
                            adminState: ['CA'],
                          }],
};
