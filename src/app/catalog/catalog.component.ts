import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  filter: (string) = "";
  products!: IProduct[];

  constructor(
    private cartSvc: CartService,
    private prodSvc: ProductService) {}

  ngOnInit() {
    this.prodSvc.getProducts().subscribe(p => {this.products = p})
  }

  addToCart = (product: IProduct): void => {
    this.cartSvc.add(product);
  }

  getFilteredProducts = (): IProduct[] => {
    return !this.filter ?
      this.products
      :
      this.products.filter(i => i.category === this.filter);
  }
}
