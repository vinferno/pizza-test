import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { SplashComponent } from './view/splash/splash.component';
import { StoreModule } from '@ngrx/store';
import { productReducers } from '../store/reducers';
import { ProductsComponent } from './feature/products/products.component';
import {EffectsModule} from '@ngrx/effects';
import {effects} from '../store/effects';
import { sessionReducer } from '../store/reducers/session.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { sessionReducers } from '../store/reducers/session.map';

@NgModule({
  declarations: [SplashComponent, ProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingRoutingModule,
    EffectsModule.forFeature(effects),
    StoreModule.forFeature('products', productReducers),
    StoreModule.forFeature('session', sessionReducers),
  ]
})
export class LandingModule { }
