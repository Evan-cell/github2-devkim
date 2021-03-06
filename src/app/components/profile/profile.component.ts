import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile : any;
  repos : any
  username : any
  constructor(private ProfileService: ProfileService) {

  }
  findProfile(){
    this.ProfileService.updateProfile(this.username)
    this.ProfileService.getProfileInfo().subscribe(profile => {
      console.log(profile)
      this.profile = profile;
    })
    this.ProfileService.getProfileRepos().subscribe(repos => {
      console.log(repos)
      this.repos = repos
    })
  }
  ngOnInit(): void {
  }

}
