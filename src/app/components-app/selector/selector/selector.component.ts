import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../service/users.service";
import {IUser} from "../../../jph/user/model";
import {PostService} from "../service/post.service";
import {IPost} from "../../../jph/post/model";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  users: IUser[]
  posts: IPost[]

  someFor = new FormGroup({
    id: new FormControl(0)
  })

  constructor(private userService: UsersService, private postService: PostService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value)
  }


  someLog() {
    console.log();
    return this.postService.getAllPostsID().subscribe(value => this.posts = value)

  }

}
