import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../_models/product.model";

@Component({
  selector: 'app-middle-header',
  templateUrl: './middle-header.component.html',
  styleUrls: ['./middle-header.component.scss']
})
export class MiddleHeaderComponent implements OnInit {

  cartIsOpen = false;
  @Input() theAddedProduct!:Product[];
  @Output()

  itemdel:EventEmitter<Product> =new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  itemremove(index:Product)
  {
    //console.log('karim')

  this.itemdel.emit(index);

  }

}
