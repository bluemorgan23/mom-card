import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BabyYodaComponent } from './baby-yoda/baby-yoda.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  }
  ,
  {
    path: 'BabyYoda',
    pathMatch: 'full',
    component: BabyYodaComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }