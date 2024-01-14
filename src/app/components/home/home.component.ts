import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodModel } from 'src/app/models/FoodModel';
import { FoodServiceService } from 'src/app/services/food-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods: Array<FoodModel>

  constructor(
    private foodService: FoodServiceService,
    private activatedRoute: ActivatedRoute
  ) { }



  ngOnInit(): void {


    this.activatedRoute.params.subscribe(params => {

      //this.foodService.foods = new Array<FoodModel>();
      if (params['food'])
        this.foods = this.foodService.getAllFoodsByfood(params['food'])
      else if (params['tag']) {
        this.foods = this.foodService.getAllFoodByTag(params['tag']);

      }
      else {
        this.foods = this.foodService.getAll()
      }


    })

  };
}