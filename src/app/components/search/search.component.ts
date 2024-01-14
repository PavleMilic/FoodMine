import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  searchFood: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['food'])
        this.searchFood = params["food"]
    })
  }


  search() {
    if (this.searchFood) {

      this.router.navigateByUrl('search/' + this.searchFood)
     
    }
  }

}
