import {Ingredient} from "../shared/ingredient.model";

export class recipe{
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredient: Ingredient;

  constructor(name, description, imagePath, ingredient) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredient = ingredient;
  }
}

