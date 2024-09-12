import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: (IUser | null)= null;
  showSignOut: boolean = false;

  constructor(
    private userSvc: UserService
  ) {

  }

  ngOnInit(): void {
    this.userSvc.getUser().subscribe( {
      next: user => this.user = user
    });

  }

  toggleSignOut = (): void =>  {
    this.showSignOut = !this.showSignOut;
  }

  signOut = (): void => {
    this.userSvc.signOut();
    this.showSignOut = false;
  }
}
