import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../../jph/post/model";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input()
  post: IPost


  constructor() {

  }

  ngOnInit(): void {

  }


}
