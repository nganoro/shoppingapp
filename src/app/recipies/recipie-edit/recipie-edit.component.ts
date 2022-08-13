import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.scss']
})
export class RecipieEditComponent implements OnInit {
  id: number;
  edit: boolean = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.edit = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit(){
    // const value = this.recipeForm.value;
    // const newIngredient = new Ingredient(value.name, value.amount);
    // const newRecipe = new Recipe(value.name, value.description, value.imagePath, newIngredient);

    if(this.edit){
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'amount' : new FormControl(null,
          [Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)]
        )
      })
    );
  }

  private initForm(){
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);

    if(this.edit){
      const currentRecipe = this.recipeService.getRecipeWithID(this.id);
      recipeName = currentRecipe.name;
      recipeDescription = currentRecipe.description;
      recipeImagePath = currentRecipe.imagePath;
      if(currentRecipe['ingredients']){
        // @ts-ignore
        for(let ingredient of currentRecipe.ingredient){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount,
                [Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  get controls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }


}
