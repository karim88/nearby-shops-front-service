import { Component, OnInit } from '@angular/core';
import {ShopsService} from '../../../../services/shops.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  data: any;
  constructor(public shopsService: ShopsService,
              public toastr: ToastrService) {
  }

  ngOnInit() {
    this.shopsService.getFavoriteShops().subscribe((d: any) => {
      this.data = d.shops;
    }, error1 => {
      this.toastr.warning('Error was occured when fetching data!');
    });
  }

  paginated(page) {
    this.shopsService.getFavoriteShops(page).subscribe((d: any) => {
      this.data = d.shops;
    }, error1 => {
      this.toastr.warning('Error was occured when fetching data!');
    });
  }
}
