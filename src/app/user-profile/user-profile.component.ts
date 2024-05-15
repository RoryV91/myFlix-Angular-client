import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(
    public fetchApiData: FetchApiDataService, 
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.fetchApiData.getUser(user._id).subscribe((response: any) => {
      this.user = response;
    });
  }

  deleteProfile(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.fetchApiData.deleteUser(user._id).subscribe(() => {
      localStorage.clear();
      alert('Your account has been deleted!');
    });
  }

  editProfile(): void {
    this.router.navigate(['/edit-profile']);
  }
}
