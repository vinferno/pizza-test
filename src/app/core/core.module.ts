import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { sessionReducers } from '../store/reducers/session.map';
import { contentReducers } from '../store/reducers/content.map';
import { HgFormBindInputDirective } from '../directives/hg-form-bind-input.directive';



@NgModule({
  declarations: [HgFormBindInputDirective],
  exports: [
    HgFormBindInputDirective,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('content', contentReducers),
  ],
})
export class CoreModule { }
