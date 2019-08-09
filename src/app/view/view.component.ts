import { Component, OnInit } from '@angular/core';
import {ViewService} from './view.service';
import { ActivatedRoute } from "@angular/router";
import {User} from '../../server/models/user';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private ViewService:ViewService, private route: ActivatedRoute) { }
  user
  ngOnInit() {
    this.ViewService
    .viewData()
    .subscribe((data: User[]) => {
      this.user = data;
      console.log(this.user)
  });
  }

}
