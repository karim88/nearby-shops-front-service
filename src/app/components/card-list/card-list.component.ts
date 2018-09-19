import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, OnChanges {

  @Input() shops: any;
  @Input() is_favorite: boolean;
  @Output() paginate = new EventEmitter<number>();
  data: object[];

  constructor() {
    this.data = [];
    this.is_favorite = false;
  }

  ngOnInit() {
    this.data = this.shops.data;
  }

  ngOnChanges() {
    this.data = this.shops.data;
  }

  /**
   * Function to be used in trackBy for ngForOf
   * @param index
   * @param shop
   */
  trackShop(index: number, shop: any) {
    return shop ? shop.id : undefined;
  }

  /**
   * Paginate to the page
   * @param event
   */
  pageChanged(event: any): void {
    this.paginate.emit(event.page);
  }

  /**
   * Update list of Shops after liking or disliking a shop ;-)
   * @param update
   */
  updateShops(update) {
    if (update) {
      this.pageChanged(this.shops.current_page);
    }
  }
}
