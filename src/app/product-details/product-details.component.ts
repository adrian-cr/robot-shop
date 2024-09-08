import { Component, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  constructor() {
    this.product;
  }

  getImageUrl = (product: IProduct): string => {
    return `/images/robot-parts/${product.imageName}`;
  }

  getDiscountedPriceClasses = (product: IProduct): string[] => {
    return product.discount > 0 ? ["discounted"] : [];
  }

  triggerAdd = (product: IProduct): void => {
    this.buy.emit();
  }
}
