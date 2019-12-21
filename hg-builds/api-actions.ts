// (nameSpace)   (type)   (method)    (action)
// $nameSpace$  $type$ $method$  $action$
export const ACTION_$cu_nameSpace$_$cu_type$_$cu_action$ = '[$cu_nameSpace$] ($ld_type$) $ld_action$';
export class Action$actionClass$ implements Action {
  readonly type = ACTION_$cu_nameSpace$_$cu_type$_$cu_action$;
  constructor(public payload: any) {}
}
export const ACTION_$cu_nameSpace$_$cu_type$_$cu_action$_FAIL = '[$cu_nameSpace$] ($ld_type$) $ld_action$-fail';
export class Action$actionClass$Fail implements Action {
  readonly type = ACTION_$cu_nameSpace$_$cu_type$_$cu_action$_FAIL;
  constructor(public payload: any) {}
}
export const ACTION_$cu_nameSpace$_$cu_type$_$cu_action$_SUCCESS = '[$cu_nameSpace$] ($ld_type$) $ld_action$-success';
export class Action$actionClass$Success implements Action {
  readonly type = ACTION_$cu_nameSpace$_$cu_type$_$cu_action$_SUCCESS;
  constructor(public payload: any) {}
}

// $nameSpace$ Effect
@Injectable()
export class $cap_nameSpace$Effect {
  constructor(
    private actions$: Actions,
    private $cam_nameSpace$Service: $cap_nameSpace$Service,
  ) {}

}

// EFFECT LISTENER
// $nameSpace$ $type$ $action$
@Effect() $cam_action$ = this.actions$.pipe(
  ofType(ACTION_$cu_nameSpace$_$cu_type$_$cu_action$),
  map((action: any) => action.payload),
  switchMap((payload) => {
    return this.$cam_nameSpace$Service.$cam_actionClass$(payload).pipe(
      map((res: Response$cap_actionClass$) => res),
      switchMap((res: Response$cap_actionClass$) => [
        new Action$cap_actionClass$Success(res),
      ]),
      catchError((error) => of(new Action$cap_actionClass$Fail(error)))
    );
  })
);

export class Response$cap_actionClass$ {
  property: any;
}

export class Api$cap_actionClass$ implements ApiConfig {
  route = '';
  headers = headersValidated;
  method = method$cap_method$;
  responseType = Response$cap_actionClass$;
}

// $nameSpace$ reducer
export class $cap_nameSpace$State {
}
export const default$cap_nameSpace$State = new $cap_nameSpace$State();
export type $cap_nameSpace$Actions = null;
export function $cam_nameSpace$Reducer(
  state: $cap_nameSpace$State = default$cap_nameSpace$State,
  action: $cap_nameSpace$Actions
) {
  switch ( action.type ) {
    default:
      return state;
  }

}

$end$
