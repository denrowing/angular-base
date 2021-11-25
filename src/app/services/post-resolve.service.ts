import { Injectable } from '@angular/core';
import {PostService} from "./post.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IPost} from "../interfaces/post.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost>{

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    console.log(+route.params['id']);
    return this.postService.getPost(+route.params['id']);
  }
}
