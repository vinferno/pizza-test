import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { SplashComponent } from './view/splash/splash.component';
import { StoreModule } from '@ngrx/store';
import { ProductsComponent } from './feature/products/products.component';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '../store/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { sessionReducers } from '../store/reducers/session.map';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [SplashComponent, ProductsComponent],
  imports : [
    CoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingRoutingModule,
    EffectsModule.forFeature ( effects ),
    StoreModule.forFeature ( 'session', sessionReducers ),
    CoreModule,
  ]
})
export class LandingModule { }
