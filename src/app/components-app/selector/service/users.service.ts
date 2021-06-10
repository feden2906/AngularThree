import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urlJPH, USERS} from "../../../comstant";
import {Observable} from "rxjs";
import {IUser} from "../../../jph/user/model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclient: HttpClient) {

  }

  getAllUsers(): Observable<IUser[]>{
   return  this.httpclient.get<IUser[]>(urlJPH + USERS)
  }

}
