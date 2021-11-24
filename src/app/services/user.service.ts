import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interfaces/user.interface";
import {urls} from "../components/constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {

  }
  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users);
  }
  getUser(id: number): Observable<IUser>  {
   return this.httpClient.get<IUser>(urls.users + '/' + id);
  }
}
