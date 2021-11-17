import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {

  }

  getPosts():Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }
  getUser(id: number) {
    return this.httpClient.get<any>(this.url + '/' + id);
  }
}
