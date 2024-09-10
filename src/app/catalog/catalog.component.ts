import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private prodSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.prodSvc.getProducts().subscribe(p => {this.products = p})
    this.route.queryParams.subscribe(params => {
      let uncapFilter: string = params["filter"] ?? "";
      let capFilter: string = uncapFilter.charAt(0).toUpperCase() + uncapFilter.slice(1)
      this.filter = capFilter;
    }
    )
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
