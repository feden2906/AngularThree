import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urlJPH, USERS} from "../../../comstant";
import {Observable} from "rxjs";
import {IUser} from "../model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urlJPH + USERS)
  }
}
