import { Component, OnInit } from '@angular/core';
import { Create, Select, User, UsersState } from '../../../store/reducers/users.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSelectedIds, getUsersNames, usersSelectAll } from 'src/app/store/selectors/users.selectors';

@Component({
  selector: 'vf-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users$: Observable<User[]>;
  public users2$: Observable<User>;
  public selected$: Observable<string>;

  constructor(private store: Store<UsersState>) { }

  ngOnInit() {
    this.users$ = this.store.select(usersSelectAll);
    this.users2$ = this.store.select(getUsersNames);
    this.selected$ = this.store.select(getSelectedIds);
  }

  createTest() {
    const test: User = {
      id: new Date().getUTCMilliseconds().toString(),
      name: 'small'
    };

    this.store.dispatch( new Create(test) );
  }

  selectUser( id) {
    this.store.dispatch(new Select(id));
  }

  styleUserButton(user, selected) {
    return { selected: user.id === selected};
  }

}
