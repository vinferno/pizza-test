import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionFormsInitForm } from '../../../store/actions/forms.actions';

@Component({
  selector: 'hg-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new ActionFormsInitForm({nameOfForm: 'AgentLoginForm' }));
  }

}
