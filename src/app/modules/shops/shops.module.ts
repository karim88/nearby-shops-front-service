import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NearbyComponent } from './components/nearby/nearby.component';

@NgModule({
  imports: [
    CommonModule,
    ShopsRoutingModule
  ],
  declarations: [FavoritesComponent, NearbyComponent]
})
export class ShopsModule { }
