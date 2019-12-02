import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SplashComponent} from './view/splash/splash.component';


const routes: Routes = [
  {path: '', component: SplashComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
