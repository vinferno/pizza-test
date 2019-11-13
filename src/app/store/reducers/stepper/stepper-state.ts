export interface StepperState {
  primaryStepper: string[];
  secondaryStepper: string[];
  showHideArray: any[];
  showHide: any;
  type: string;
}

const defaultState: StepperState = {
  primaryStepper : [],
  secondaryStepper : [],
  showHideArray : [],
  showHide : null,
  type : 'reset',
};
export const STEPPER_UPDATE_PRIMARY = '[stepper] update primary';
export const STEPPER_UPDATE_SECONDARY = '[stepper] update secondary';
export const STEPPER_UPDATE_SHOWHIDEARRAY = '[stepper] update showhidearray';
export const STEPPER_UPDATE_SHOWHIDE = '[stepper] update showhide';
export const STEPPER_RESET_PRIMARY = '[stepper] reset primary';
export const STEPPER_RESET_SECONDARY = '[stepper] reset secondary';
export const STEPPER_RESET_SHOWHIDEARRAY = '[stepper] reset showhidearray';
export const STEPPER_RESET_SHOWHIDE = '[stepper] reset showhide';
export const STEPPER_RESET = '[stepper] reset';
const types = {
  STEPPER_UPDATE_PRIMARY,
  STEPPER_UPDATE_SECONDARY,
  STEPPER_UPDATE_SHOWHIDEARRAY,
  STEPPER_UPDATE_SHOWHIDE,
  STEPPER_RESET_PRIMARY,
  STEPPER_RESET_SECONDARY,
  STEPPER_RESET_SHOWHIDEARRAY,
  STEPPER_RESET_SHOWHIDE,
  STEPPER_RESET,
};

export const stepperActions = {
  updatePrimary : ( payload: any, calledFrom: string ) => {
    if ( calledFrom ) {
      // console.log('*********calledFrom', calledFrom, payload)
    } else {
      // console.log('?????????????????No Called From', payload)
    }
    return { type : STEPPER_UPDATE_PRIMARY, payload };
  },
  updateSecondary : ( payload: any ) => {
    return { type : STEPPER_UPDATE_SECONDARY, payload };
  },
  updateShowHideArray : ( payload ) => {
    return { type : STEPPER_UPDATE_SHOWHIDEARRAY, payload };
  },
  updateShowHide : ( payload ) => {
    return { type : STEPPER_UPDATE_SHOWHIDE, payload };
  },
  resetPrimary : () => {
    return { type : STEPPER_RESET_PRIMARY, payload : null };
  },
  resetSecondary : () => {
    return { type : STEPPER_RESET_SECONDARY, payload : null };
  },
  resetShowHide : () => {
    return { type : STEPPER_RESET_SHOWHIDE, payload : null };
  },
  resetShowHideArray : () => {
    return { type : STEPPER_RESET_SHOWHIDEARRAY, payload : null };
  },
  reset : () => {
    return { type : STEPPER_RESET, payload : null };
  },
  types,
};

export function StepperReducer( state: StepperState = defaultState, action: any ): StepperState {
  if ( !action.type.includes ( '[stepper]' ) ) {
    return state;
  }
  switch ( action.type ) {
    case STEPPER_UPDATE_PRIMARY:
      return { ...state, ...{ ...{ primaryStepper : addOrGoBack ( action.payload, state.primaryStepper ) } }, ...{ type : action.type } };
    case STEPPER_UPDATE_SECONDARY:
      // tslint:disable-next-line:max-line-length
      return { ...state, ...{ ...{ secondaryStepper : addOrGoBack ( action.payload, state.secondaryStepper ) } }, ...{ type : action.type } };
    case STEPPER_UPDATE_SHOWHIDEARRAY:
      return { ...state, ...{ ...{ showHideArray : action.payload } }, ...{ type : action.type } };
    case STEPPER_UPDATE_SHOWHIDE:
      return { ...state, ...{ ...{ showHide : action.payload } }, ...{ type : action.type } };
    case STEPPER_RESET_PRIMARY:
      return { ...state, ...{ ...{ primaryStepper : [] } }, ...{ type : action.type } };
    case STEPPER_RESET_SECONDARY:
      return { ...state, ...{ ...{ secondaryStepper : [] } }, ...{ type : action.type } };
    case STEPPER_RESET_SHOWHIDE:
      return { ...state, ...{ ...{ showHide : null } }, ...{ type : action.type } };
    case STEPPER_RESET_SHOWHIDEARRAY:
      return { ...state, ...{ ...{ showHideArray : [] } }, ...{ type : action.type } };
    case STEPPER_RESET:
      return { ...defaultState };
    default:
      return { ...state, type : action.type };
  }
}


function addOrGoBack( value: string, array: string[] ) {
  if ( !value ) {
    return array;
  }
  if ( array.includes ( value ) ) {
    return array.slice ( 0, array.indexOf ( value ) + 1 );
  } else {
    const blackList = [ 'Finalize', 'Requests' ];
    const found = array.some ( r => blackList.indexOf ( r ) >= 0 );
    if ( value === 'Finalize' ) {
      array.splice ( 0, array.length );
    } else if ( found ) {
      array.length = 0;
    }
    array.push ( value );
    return array;
  }
}
