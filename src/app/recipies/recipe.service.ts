import { Injectable } from '@angular/core';
import {recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new Subject<recipe>();

  constructor() { }

  private recipes: recipe[] = [
    new recipe('A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Burger', 2),
        new Ingredient('Fries', 5)
      ]),
    new recipe('Another Test Recipe',
      'This is simply a test',
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

  addToShoppingList(ing : Ingredient[]){
    const ingName = ing[0].name;
    const ingAmount = ing[0].amount;
    const newIngredient = new Ingredient(ingName, ingAmount);
  }
}
