import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor(private router: Router, private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navTo(id: number) {
    this.router.navigate([this.user.id], {relativeTo: this.activetedRoute, state: this.user});
  }
}
