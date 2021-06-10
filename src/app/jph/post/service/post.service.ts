import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {POSTS, urlJPH} from "../../../comstant";
import {Observable} from "rxjs";
import {IPost} from "../model";

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private httpClient: HttpClient) {
  }

  getSomePosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urlJPH + POSTS)
  }
  getSomePost(someId:number):Observable<IPost>{
    return this.httpClient.get<IPost>(urlJPH + POSTS + '/' + someId)

  }
}
