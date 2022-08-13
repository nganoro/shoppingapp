import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeServices: RecipeService) { }

  ngOnInit() {
    // this.recipeServices.recipeSelected
    //   .subscribe(
    //     (recipe: Recipe) => {
    //       this.selectedRecipe = recipe;
    //     }
    //   );
  }

}
