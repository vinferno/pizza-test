import { Component, OnInit } from '@angular/core';
import { Create, Select, SelectId, User, UsersState } from '../../../store/reducers/users.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSelectedIds, getSelectedIds2, getUsersNames, usersSelectAll } from 'src/app/store/selectors/users.selectors';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'vf-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users$: Observable<User[]>;
  public users2$: Observable<User>;
  public selected$: Observable<string>;
  public selectedIds$: Observable<string[]>;

  constructor(private store: Store<UsersState>, public api: ApiService) { }

  ngOnInit() {
    this.users$ = this.store.select(usersSelectAll);
    this.users2$ = this.store.select(getUsersNames);
    this.selected$ = this.store.select(getSelectedIds);
    this.selectedIds$ = this.store.select(getSelectedIds2);
  }

  createTest() {
    const test: User = {
      id: new Date().getUTCMilliseconds().toString(),
      name: 'small'
    };

    this.store.dispatch( new Create(test) );
  }

  selectUser( id) {
    this.store.dispatch(new SelectId(id));
  }

  styleUserButton(user, selected, selectedIds) {
    return { selected: ( user.id === selected ) || ( selectedIds.includes(user.id) )};
  }

}
