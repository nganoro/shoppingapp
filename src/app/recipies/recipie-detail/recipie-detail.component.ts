import { Component, OnInit } from '@angular/core';
import {recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.scss']
})
export class RecipieDetailComponent implements OnInit {
  // @Input() chosenRecipe : recipe;
  chosenRecipe : recipe;
  id: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService : RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
              this.id = +params['id'];
              this.chosenRecipe = this.recipeService.getRecipeWithID(this.id);
        }
      );
    console.log(this.id);
  }

  addToShoppingList(){
    // @ts-ignore
    this.shoppingListService.addRecipeDetailIngredients(this.chosenRecipe.ingredient);
    // this.router.navigate(['ShoppingList']);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
