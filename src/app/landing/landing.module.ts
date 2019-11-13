import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { SplashComponent } from './view/splash/splash.component';
import { StoreModule } from '@ngrx/store';
import { reducers} from '../store/reducers';
import { ProductsComponent } from './feature/products/products.component';
import {EffectsModule} from '@ngrx/effects';
import {effects} from '../store/effects';

@NgModule({
  declarations: [SplashComponent, ProductsComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    EffectsModule.forFeature(effects),
    StoreModule.forFeature('products', reducers)
  ]
})
export class LandingModule { }
