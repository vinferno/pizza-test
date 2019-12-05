import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app.models';

@Component({
  selector: 'hg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'action-pattern';

  constructor(
    public store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
  }
}
