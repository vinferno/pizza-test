import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { SplashComponent } from './view/splash/splash.component';
import { StoreModule } from '@ngrx/store';
import { reducers} from '../store/reducers';

@NgModule({
  declarations: [SplashComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    StoreModule.forFeature('products', reducers)
  ]
})
export class LandingModule { }
