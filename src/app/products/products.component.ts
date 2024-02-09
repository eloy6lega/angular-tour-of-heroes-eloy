import { Component } from '@angular/core';
import { Product } from '../products';
import { PRODUCT } from '../mock-products';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = PRODUCT; //asignación del mock, de la variable, por eso está en mayúsculas
  selectedProduct?: Product;
  onSelect(Product: Product): void {
    this.selectedProduct = Product;
  }
  addToCart(selectedProduct: Product): void {
    alert(`Product "${selectedProduct.name}" with ID "${selectedProduct.id}" has been added to the cart.`);
  }
}

