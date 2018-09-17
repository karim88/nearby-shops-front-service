import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShopsService} from '../../services/shops.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() shop: any;
  @Input() is_favorite: boolean;
  @Output() liked = new EventEmitter<boolean>();
  constructor(public shopsService: ShopsService,
              public toastr: ToastrService) {
  }

  ngOnInit() {
  }

  like = (id) => {
    const data = { id: id, is_liked: true };
    this.shopsService.likeOrDislike(data).subscribe(d => {
      this.liked.emit(true);
      this.toastr.success(d.message);
    }, error1 => this.toastr.warning('Shop not liked!'));
  }

  dislike = (id) => {
    const data = { id: id, is_liked: false };
    this.shopsService.likeOrDislike(data).subscribe(d => {
      this.liked.emit(true);
      this.toastr.success(d.message);
    }, error1 => this.toastr.warning('I think maybe you love this shop!'));
  }

  delete = (id) => {
    this.shopsService.remove(id).subscribe(d => {
      this.liked.emit(true);
      if (d.message !== 'Shop still in your favorite list!') {
        this.toastr.success(d.message);
      } else {
        this.toastr.error(d.message);
      }
    }, error1 => this.toastr.warning('I think you really love this shop!'));
  }
}
