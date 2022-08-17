import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {Recipe} from "../recipies/recipe.model";
import {RecipeService} from "../recipies/recipe.service";
import {map, tap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class DataStorageServices {
  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipe();
    this.http
    .put(
      'https://ng-angularcourse-default-rtdb.firebaseio.com/recipes.json',
      recipes
    )
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http
    .get<Recipe[]>('https://ng-angularcourse-default-rtdb.firebaseio.com/recipes.json')
    .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    )
  }
}
