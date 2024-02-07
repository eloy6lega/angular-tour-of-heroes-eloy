import { Component } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  producto1: Product = {
    id: 1,
    name: 'Bolsa de patatas fritas',
    price: 100
  };
}
