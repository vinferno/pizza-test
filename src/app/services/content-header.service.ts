import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ApiPostContentHeader } from './endpoints/request';
import { Store } from '@ngrx/store';
import { getUrlState } from '../store/selectors/router.selectors';

@Injectable({
  providedIn: 'root'
})
export class ContentHeaderService {

  public urlState;
  constructor(
    private api: ApiService,
    private store: Store<any>
  ) {
    this.store.select(getUrlState).subscribe( urlState => {
      this.urlState = urlState;
    });
  }

  getContentHeader() {
    return this.api.request(new ApiPostContentHeader(), {
      language: 'en',
      route: this.urlState.url.substring(1),
    });
  }
  public contentHeaderApiRequestClientManager() {
    return this.api.request(new ApiPostContentHeader(), {
      language: 'en',
      route: 'counselor/member-lookup'
    });
  }
}
