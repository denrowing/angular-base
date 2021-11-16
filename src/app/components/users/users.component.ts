import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Post} from "../../models/Post";
// import {Post} from "../../models/Post";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = []
  posts: Post[] = []

  constructor(private userService: UserService, private postService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
    this.postService.getPosts().subscribe(elem => this.posts = elem);
  }

}
