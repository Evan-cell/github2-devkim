import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile : any;
  constructor(private ProfileService: ProfileService) {
    this.ProfileService.getProfileInfo().subscribe(profile => {
      console.log(profile)
      this.profile = profile;
    })
  }
  ngOnInit(): void {
  }

}
