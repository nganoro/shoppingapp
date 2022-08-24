import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {DataStorageServices} from "../shared/data-storage.services";
import {AuthService} from "../authorization/auth.service";
import {Subscription} from "rxjs";
import {User} from "../authorization/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub : Subscription;

  constructor(
    private dataStorageService: DataStorageServices,
    private authService: AuthService) {}

  // @Output() featureSelected = new EventEmitter<string>();

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onLogout(){
    this.authService.logout();
  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}

