import { Component, Input, OnInit } from '@angular/core';
import { TagModel } from 'src/app/models/Tags';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() foodPageTags: Array<string>;

  tags: Array<TagModel>

  constructor(private foodService: FoodServiceService) {

  }

  ngOnInit(): void {
    if (!this.foodPageTags)
      this.tags = this.foodService.getAllTags()

  }
}
