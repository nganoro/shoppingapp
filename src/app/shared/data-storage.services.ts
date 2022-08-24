import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

import {Recipe} from "../recipies/recipe.model";
import {RecipeService} from "../recipies/recipe.service";
import {exhaustMap, map, take, tap} from "rxjs/operators";
import {AuthService} from "../authorization/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageServices {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {
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
    //take(1) function only subscribes 1 time to teh latest, grab data and unsubscribes bcuz we don't want to continously extract
    // exhaustMap lets the 1st observable finish, and replaces it with the new observable
    return this.http.get<Recipe[]>(
          'https://ng-angularcourse-default-rtdb.firebaseio.com/recipes.json'
        )
    .pipe(
      map(recipes => {
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

