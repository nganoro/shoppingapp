import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScssComponent } from './scss/scss.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipieListComponent } from './recipies/recipie-list/recipie-list.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipeItemComponent } from './recipies/recipie-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BetterHighlightDirective } from './recipies/better-highlight.directive';
import { ShoppingListService} from "./shopping-list/shopping-list.service";
import { RecipeService} from "./recipies/recipe.service";
import { RecipieStartComponent } from './recipies/recipie-start/recipie-start.component';
import { RecipieEditComponent } from './recipies/recipie-edit/recipie-edit.component';
import { FormPracticeComponent } from './form-practice/form-practice.component';
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    ScssComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BetterHighlightDirective,
    RecipieStartComponent,
    RecipieEditComponent,
    FormPracticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
