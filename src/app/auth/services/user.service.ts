import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/base.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.entity";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/users';
  }
}
