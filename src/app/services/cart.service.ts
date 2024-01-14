import { Injectable, OnInit } from '@angular/core';
import { CartModel } from '../models/Cart';
import { FoodModel } from '../models/FoodModel';
import { CartItemModel } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  private cart: CartModel = new CartModel();

  constructor() { }
  //items = Array<FoodModel>
  addToCart(food: FoodModel): void {
    let cartItem = this.cart.items.find(item => {
      return item.food.id === food.id
    })
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
    } else {
      this.cart.items.push(new CartItemModel(food))
    }
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => {
      return item.food.id != foodId
    })
  }

  changeQuantity(foodId: number, quantity: number): void {
    let cartItem = this.cart.items.find(item => {
      return item.food.id === foodId
      // if (!cartItem) return; // vrati i ne radi nista. Ne postoji item kome moze da se promeni quantity
      // else {
      //   cartItem.quantity = quantity;
      // }
    })
    if (cartItem) {
      cartItem.quantity = quantity;
    }
  }

  getCart(): CartModel {
    return this.cart
  }

  ngOnInit(): void {

  }
}
