import {Component, OnInit, EventEmitter, OnDestroy, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subsciription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  // @Output() outputIngredient = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subsciription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.shoppingListForm.setValue({
            name : this.editedItem.name,
            amount : this.editedItem.amount
          })
        }
      );

  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredients(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onDeletedItem(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.editMode = false;
    this.onClearItem();
  }

  onClearItem() {
    this.shoppingListForm.form.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subsciription.unsubscribe();
  }

}
