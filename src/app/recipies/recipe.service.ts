import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new Subject<Recipe>();

  constructor(private shoppingListService : ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test for first recipe',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Burger', 2),
        new Ingredient('Fries', 5)
      ]),
    new Recipe('Another Test Recipe',
      'This is simply a test for second recipe',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Salsa', 3),
        new Ingredient('Mashed Potatos', 5)
      ])
  ];

  getRecipe(){
    return this.recipes.slice();
  }

  getRecipeWithID(index: number){
    return this.recipes[index];
  }

  addRecipe(newRecipe: Recipe){
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientToShoppingList(ing : Ingredient[]){
    this.shoppingListService.addRecipeDetailIngredients(ing);
  }
}
