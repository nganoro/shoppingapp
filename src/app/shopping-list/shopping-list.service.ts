import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 3),
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addRecipeDetailIngredients(ingredients: Ingredient[]){
    for(let ing of ingredients){
      console.log(ing.amount);
      this.addIngredients(ing);
    }
  }
}
