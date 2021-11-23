import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<any[]> {
    return this.httpClient.any[] > (this.url);
  }

  getUser(id: number) {
    return this.httpClient.getUser(this.url + '/' + id);
  }

}
