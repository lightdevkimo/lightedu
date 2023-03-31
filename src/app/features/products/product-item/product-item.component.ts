import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../_models/product.model";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: Product;
  @Output()
  itemAdded: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddTOCartPressed(){
      console.log('kimo');
      this.itemAdded.emit(this.productItem)
  }

}
