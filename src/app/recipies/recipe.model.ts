import {Ingredient} from "../shared/ingredient.model";

export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient;

  constructor(name, description, imagePath, ingredient) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredient;
  }
}

