import {
  CREATE,
  DELETE,
  initialStateUsers,
  SELECT,
  SELECTID,
  UPDATE,
  UsersActions,
  usersAdapter,
  UsersState
} from '../actions/users.actions';

export function usersReducer(
  state: UsersState = initialStateUsers,
  action: UsersActions
) {

  switch ( action.type ) {

    case CREATE:
      return usersAdapter.addOne ( action.test, state );

    case UPDATE:
      return usersAdapter.updateOne ( {
        id : action.id,
        changes : action.changes,
      }, state );

    case DELETE:
      return usersAdapter.removeOne ( action.id, state );

    case SELECT:
      return { ...state, ...{ selected : action.id } };

    case SELECTID:
      const selectedIds = [ ...state.selectedIds ];
      if ( selectedIds.includes ( action.id ) ) {
        selectedIds.splice ( selectedIds.indexOf ( action.id ), 1 );
      } else {
        selectedIds.push ( action.id );
      }
      return { ...state, ...{ selectedIds } };

    default:
      return state;
  }

}

