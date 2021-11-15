import { Injectable } from '@angular/core';
import {Post} from "../models/Post";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts'

  users: Post[] = [];

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url)
  }
  getPost(id: number): Observable<Post> {
    return this.httpClient.get<any>(this.url + '/' + id);
  }
}
