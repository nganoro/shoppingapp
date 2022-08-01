import { Component, OnInit } from '@angular/core';
import {recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {
  selectedRecipe: recipe;

  constructor(private recipeServices: RecipeService) { }

  ngOnInit() {
    this.recipeServices.recipeSelected
      .subscribe(
        (recipe: recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

}
