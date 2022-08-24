import {Component, OnInit} from '@angular/core';
import {AuthService} from "./authorization/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'shoppinglist-app';

  // loadedFeature = 'recipe';
  //
  // onNavigate(feature: string){
  //   this.loadedFeature = feature;
  // }
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.autoLogin();
  }

}
