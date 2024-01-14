import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/Cart';
import { CartItemModel } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart!: CartModel;
  notFoundMessage: string = "Cart Page Is Empty!"
  constructor(
    private cartService: CartService,
    private foodService: FoodServiceService

  ) {

    this.setCart()

  }
  removeFromCart(cartItem: CartItemModel) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItemModel, qunatityInString: string) {
    const quantity = parseInt(qunatityInString)
    if (cartItem) {
      this.cartService.changeQuantity(cartItem.food.id, quantity)
      this.setCart();
    }
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
    // let foods = this.foodService.getAll();
    // this.cartService.addToCart(foods[1]);
    // this.cartService.addToCart(foods[3]);

    // this.cartService.addToCart(foods[4])

  }

}
