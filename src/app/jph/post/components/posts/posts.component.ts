import {Component, OnInit} from '@angular/core';
import {PostService} from "../../service";
import {IPost} from "../../model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[]


  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
  this.postService.getSomePosts().subscribe(value => this.posts = value)
  }
}
