import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = '';
  @Input() resetLinkText: string = '';
  @Input() resetLinkRoute: string = '/'



  ngOnInit(): void {

  }

}
