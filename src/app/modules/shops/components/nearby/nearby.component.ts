import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../../../../services/shops.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.component.html',
  styleUrls: ['./nearby.component.css']
})
export class NearbyComponent implements OnInit {

  data: any;
  constructor(public shopsService: ShopsService,
    public toastr: ToastrService) {
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.shopsService.getShops(lat, lon, 1).subscribe((d: any) => {
          this.data = d.shops;
        }, error1 => {
          this.toastr.warning('Error was occured when fetching data!');
        });
      });
    } else {
      this.toastr.warning('Geolocation is not supported by this browser.');
    }
  }

  paginated(page) {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.shopsService.getShops(lat, lon, page).subscribe((d: any) => {
          this.data = d.shops;
        }, error1 => {
          this.toastr.warning('Error was occured when fetching data!');
        });
      });
    } else {
      this.toastr.warning('Geolocation is not supported by this browser.');
    }
  }
}
