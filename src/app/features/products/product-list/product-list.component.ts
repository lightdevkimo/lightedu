import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../../_models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productsArray :Product[] = [
    {
      count:1,
      name: 'Car',
      price:500,
      description:'test',
      discount:20,
      imageUrl:'https://picsum.photos/200/309'
    },{
      count:1,
      name: 'plane',
      price:100,
      description:'test',
      discount:20,
      imageUrl:'https://picsum.photos/200/307'
    },{
      count:1,
      name: 'air',
      price:300,
      description:'test',
      discount:20,
      imageUrl:'https://picsum.photos/200/304'
    },{
      count:1,
      name: 'girl',
      price:340,
      description:'test',
      discount:20,
      imageUrl:'https://picsum.photos/200/303'
    },{
      count:1,
      name: 'man',
      price:340,
      description:'test',
      discount:20,
      imageUrl:'https://picsum.photos/200/302'
    },{
      count:1,
      name: 'test4',
      price:340,
      description:'test',
      discount:20,
      imageUrl:'https://picsum.photos/200/301'
    },{
      count:1,
      name: 'test3',
      price:340,
      description:'test',
      discount:20,
      imageUrl:'https://picsum.photos/200/305'
    },{
      count:1,
      name: 'test2',
      price:340,
      description:'test',
      discount:20,
      imageUrl:'https://picsum.photos/200/310'
    },{
      count:1,
      name: 'test1',
      price:340,
      description:'test',
      discount:20,
      imageUrl:'https://picsum.photos/200/308'
    },
  ]



  @Output()
  itemAddedFromProductListComponent : EventEmitter<Product> =new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }



  onItemAdded(product:Product){
    this.itemAddedFromProductListComponent.emit(product);
  }
}
