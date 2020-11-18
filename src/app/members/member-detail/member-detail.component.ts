import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.route.data.subscribe((data) => {
      // tslint:disable-next-line: no-string-literal
      this.user = data['user'];
    });
  }

  // tslint:disable-next-line: typedef
  // loadUser() {
  //   // tslint:disable-next-line: no-string-literal
  //   this.userService.getUser(+this.route.snapshot.params['id']).subscribe(
  //     (user: User) => {
  //       this.user = user;
  //     },
  //     (error) => {
  //       this.alertify.error(error);
  //     }
  //   );
  // }
}
