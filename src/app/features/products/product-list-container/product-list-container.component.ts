import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../../_models/product.model";

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output()
  onItemAddedFromContainer: EventEmitter<Product> = new EventEmitter<Product>();

  onItemAdded(product:any){
    console.log(product)
    this.onItemAddedFromContainer.emit(product);
  }

}
