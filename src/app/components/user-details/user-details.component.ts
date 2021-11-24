import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
    //   console.log(history.state);
    //     console.log(this.router.getCurrentNavigation()?.extras.state);
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser;
    })
  }

  ngOnInit(): void {

  }
}
