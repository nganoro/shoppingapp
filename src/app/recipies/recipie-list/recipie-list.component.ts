import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.scss']
})
export class RecipieListComponent implements OnInit {
  // @Output() chosenRecipe = new EventEmitter<recipe>();
  recipes: recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

}
