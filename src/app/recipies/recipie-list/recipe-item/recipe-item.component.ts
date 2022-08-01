import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { recipe } from "../../recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() theRecipes: recipe;
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  // onSelected(){
  //   // this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.theRecipes);
  // }

}
