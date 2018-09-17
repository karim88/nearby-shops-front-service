import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NearbyComponent } from './components/nearby/nearby.component';
import {CardListComponent} from '../../components/card-list/card-list.component';
import {CardComponent} from '../../components/card/card.component';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    ShopsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [FavoritesComponent, NearbyComponent,
    CardListComponent, CardComponent]
})
export class ShopsModule { }
