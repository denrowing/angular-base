import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUser} from "../interfaces/user.interface";
import {Observable} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements  Resolve<IUser>{

  constructor(private userService: UserService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    console.log(+route.params['id']);
    return this.userService.getUser(+route.params['id']);
  }
}
