import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number( routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
