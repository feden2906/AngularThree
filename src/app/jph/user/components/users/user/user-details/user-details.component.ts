import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../../model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUser

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(() =>
      this.userDetails = this.router.getCurrentNavigation()?.extras.state as IUser
    )
  }

  ngOnInit(): void {

  }

}
