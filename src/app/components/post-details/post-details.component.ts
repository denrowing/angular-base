import { Component, OnInit } from '@angular/core';
import {IPost} from "../../interfaces/post.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPost
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(
      value => {
        this.post = this.router.getCurrentNavigation()?.extras.state as IPost;
      }
    )
  }

  ngOnInit(): void {
  }

}
