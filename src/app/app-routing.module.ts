import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home-page/home.component';
import { StarwarsComponent } from './views/starwars-main-page/starwars.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starwars', component: StarwarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
