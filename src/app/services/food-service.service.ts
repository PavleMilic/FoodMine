import { Injectable } from '@angular/core';
import { FoodModel } from '../models/FoodModel';
import { TagModel } from '../models/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  foods: Array<FoodModel> = []

  constructor() { }


  getAll(): Array<FoodModel> {
    this.foods = [];
    let burger: FoodModel = new FoodModel(1, 'Burger', false, 3.5, '/assets/images/Burger.jpg', 12, '7-11min', ['FastFood', 'Meat', 'Lunch'], ['Germany', 'USA', 'Serbia']);
    this.foods.push(burger)
    let vegetablePizza: FoodModel = new FoodModel(2, 'Vegetable Pizza', false, 3.0, '/assets/images/Vegetable pizza.jpg', 15, '11-15min', ['FastFood', 'Vegan', 'Dinner', 'Pizza'], ['Italy', 'Napuli']);
    this.foods.push(vegetablePizza)
    let frenchFries: FoodModel = new FoodModel(3, 'French fries', false, 3.8, '/assets/images/French fries.jpg', 4, '2-4min', ['FastFood', 'Sides', 'Fry'], ['France', 'Denmark']);
    this.foods.push(frenchFries)
    let meatBall: FoodModel = new FoodModel(4, 'Meat ball', true, 4.5, '/assets/images/Meat ball.jpg', 13, '45-60min', ['SlowFood', 'Meat', 'Lunch'], ['Persia', 'Turkey', 'Italy']);
    this.foods.push(meatBall)
    let pizza: FoodModel = new FoodModel(5, 'Pizza Pepperoni', true, 3.5, '/assets/images/Pizza.jpg', 14, '11-15min', ['FastFood', 'Dinner', 'Lunch', 'Pizza'], ['Italy', 'Napuli']);
    this.foods.push(pizza)
    let chickenSoup: FoodModel = new FoodModel(6, 'Chicken soup', false, 3.5, '/assets/images/Chicken soup.jpg', 6, '14-18min', ['SlowFood', 'Meat', 'Lunch', 'Soup'], ['Germany', 'Serbia'])
    this.foods.push(chickenSoup)

    return this.foods;

  }

  getAllFoodByTag(tag: string): Array<FoodModel> {

    if (tag == 'All')
      return this.getAll()
    else {
      return this.getAll().filter(x =>
        x.tags.includes(tag)
      )
    }
  }

  getAllFoodById(id: number): FoodModel {
    return this.getAll().find(food => food.id == id);
  }

  getAllTags(): Array<TagModel> {
    return [
      { name: 'All', count: 6 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 4 },
      { name: 'SlowFood', count: 2 },
      { name: 'Meat', count: 2 },
      { name: 'Sides', count: 1 },
      { name: 'Dinner', count: 2 },
      { name: 'Vegan', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ]
  }
  getAllFoodsByfood(food: string): Array<FoodModel> {
    return this.getAll().filter(x => x.name.toLowerCase().includes(food.toLowerCase()));

  }
}
