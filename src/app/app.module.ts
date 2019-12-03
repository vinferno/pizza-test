import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { RouterState, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromReducers from './store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from './services/form.service';
import { AuthInterceptor } from './services/endpoints/api-interceptor.service';
import { CoreModule } from './core/core.module';
import { BindSelectDirective } from './directives/bind-select.directive';


const metaReducers = fromReducers.metaReducers;

@NgModule({
  declarations: [
    AppComponent,
    BindSelectDirective,
  ],
  imports: [
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientXsrfModule.withOptions(getXSRF()),
    StoreModule.forRoot(fromReducers.reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),
  ],
  providers: [{provide: RouterStateSerializer, useClass: fromReducers.CustomSerializer},
    FormService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getXSRF(): XSRF {
  return (environment.production)
    ? { cookieName: '__Host-XSRF-TOKEN', headerName: 'X-XSRF-TOKEN' }
    : { cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN' };
}

export interface XSRF {
  cookieName: string;
  headerName: string;
}
