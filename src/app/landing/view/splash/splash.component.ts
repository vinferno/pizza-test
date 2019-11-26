import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionFormsInitForm, ActionFormsRequestUpdateField, ActionFormsUpdateField } from '../../../store/reducers';

@Component({
  selector: 'vf-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new ActionFormsInitForm({nameOfForm: 'agentLogin' }));
    setTimeout((  ) => {
      this.store.dispatch(new ActionFormsRequestUpdateField({ nameOfForm: 'agentLogin', field: 'test', value: 2 }));
    }, 2000);
    setTimeout((  ) => {
      this.store.dispatch(new ActionFormsRequestUpdateField({ nameOfForm: 'agentLogin', field: 'test', value: 4 }));
    }, 4000);
  }

}
