import { FoodModel } from "./FoodModel";

export class CartItemModel {
  food: FoodModel;
  quantity: number = 1;


  constructor(food: FoodModel) {
    this.food = food;
    this.price
  }
  get price(): number {
    return this.food.price * this.quantity
  }

}