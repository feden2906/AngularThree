import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {POSTS, urlJPH} from "../../../comstant";
import {Observable} from "rxjs";
import {IPost} from "../../../jph/post/model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpclient: HttpClient) {

  }

  getAllPostsID(): Observable<IPost[]>{
   return  this.httpclient.get<IPost[]>(urlJPH + POSTS)

}

}
