import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;

  constructor() {
    this.product;
  }

  getImageUrl = (product: IProduct): string => {
    return `/images/robot-parts/${product.imageName}`;
  }

  getDiscountedPriceClasses = (product: IProduct): string[] => {
    return product.discount > 0 ? ["discounted"] : [];
  }
}
