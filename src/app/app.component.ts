import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/reducers';

@Component({
  selector: 'vf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'action-pattern';

  constructor(
    public store: Store<State>
  ) {

  }

  ngOnInit(): void {
    console.log('app');


  }
}
