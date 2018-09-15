import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NearbyComponent } from './components/nearby/nearby.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  {
    path: 'nearby',
    component: NearbyComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
