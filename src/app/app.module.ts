import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavTopComponent } from './layout/nav-top/nav-top.component';
import { MiddleHeaderComponent } from './layout/middle-header/middle-header.component';
import { LowerHeaderComponent } from './layout/lower-header/lower-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductItemComponent } from './features/products/product-item/product-item.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductListContainerComponent } from './features/products/product-list-container/product-list-container.component';


@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    MiddleHeaderComponent,
    LowerHeaderComponent,
    FooterComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductListContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
