import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DataStorageServices} from "../shared/data-storage.services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageServices) {}

  // @Output() featureSelected = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

}

