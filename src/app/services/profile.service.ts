import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private useName : any;
  private clientId = 'dea42400e8946473dfdb'
  private clientSecret = '03dc2fcc114d218371c6c4fd7d92ce6c1c474dc'
  constructor(private httpClient:HttpClient) {
    console.log('service is ready!')
    this.useName="evan-cell"
  }
  getProfileInfo(){
    return this.httpClient.get("https://api.github.com/users/" + this.useName + "?client_Id" + this.clientId + "&client_Secret=" + this.clientSecret)
    .pipe(map(res => res))


  }
}
