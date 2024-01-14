import { CartItemModel } from "./CartItem";

export class CartModel {

  items: Array<CartItemModel> = [];

  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach(item => {
      totalPrice += item.price;
    })
    return totalPrice;

  }
}