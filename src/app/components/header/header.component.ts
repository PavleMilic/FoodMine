import { Component } from '@angular/core';
import { FoodModel } from 'src/app/models/FoodModel';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private foodService: FoodServiceService) {

  }
  searchedFood: string = '';
  mapedFoods: FoodModel;


  searchFood() {



  }
}
