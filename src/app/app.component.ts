import {Component, Input} from '@angular/core';
import {Product} from "./_models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab2';

  addedProduct : Product[] = [];

  onItemAdd(product:Product){

    let isProductExist=false;

    for(let i in this.addedProduct)
    {
      if(this.addedProduct[i].name===product.name)
      {
        this.addedProduct[i].count++;
        isProductExist=true;
        break;
      }

    }
    if(!isProductExist)
    {
      this.addedProduct.push(product)
    }
    // this.addproducts.push(product);
  }

  /*
  onItemAdd(product: Product){
    this.addedProduct.push(product);
  }
  */

  onItemdel(product: Product){
    /*var i = this.addedProduct.indexOf(product)
    this.addedProduct.splice(i,1);*/
    this.addedProduct.splice(this.addedProduct.indexOf(product),1)
  }

}
