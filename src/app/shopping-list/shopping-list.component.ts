import { Component, OnInit, Input } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Recipe} from "../recipies/recipe.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  newIngredient: Ingredient[];
  // private isChangedSub: Subscription;

  constructor(private shoppingListService: ShoppingListService ) { }

  ngOnInit() {
    // @ts-ignore
    this.newIngredient = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.newIngredient = ingredients;
      }
    )
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    // this.isChangedSub.unsubscribe();
  }


}
