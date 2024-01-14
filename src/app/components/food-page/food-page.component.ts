import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodModel } from 'src/app/models/FoodModel';
import { CartService } from 'src/app/services/cart.service';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {

  constructor(
    private foodService: FoodServiceService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) { }

  food: FoodModel;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'])
        this.food = this.foodService.getAllFoodById(params['id'])
    })
  }

  addToCart() {
    this.cartService.addToCart(this.food)
    console.log('Food-page', this.food);
    this.router.navigateByUrl('/cart-page');
  }
}