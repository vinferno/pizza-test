import { Component, OnInit } from '@angular/core';
import { Create, User, UsersState} from '../../../store/reducers/users.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUsersNames, usersSelectAll } from 'src/app/store/selectors/users.selectors';

@Component({
  selector: 'vf-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users$: Observable<User[]>;
  public users2$: Observable<User>;

  constructor(private store: Store<UsersState>) { }

  ngOnInit() {
    this.users$ = this.store.select(usersSelectAll);
    this.users2$ = this.store.select(getUsersNames);
  }

  createTest() {
    const test: User = {
      id: new Date().getUTCMilliseconds().toString(),
      name: 'small'
    };

    this.store.dispatch( new Create(test) );
  }

}
