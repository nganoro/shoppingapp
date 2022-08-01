import {Component, OnInit, EventEmitter} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  // @Output() outputIngredient = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredients(newIngredient);
  }

  onDeletedItem(){
  }

  onClearItem(){
  }

}