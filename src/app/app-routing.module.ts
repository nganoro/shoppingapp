import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from "@angular/common";
import {RecipiesComponent} from "./recipies/recipies.component";
import {AppComponent} from "./app.component";
import {RecipieListComponent} from "./recipies/recipie-list/recipie-list.component";
import {RecipieDetailComponent} from "./recipies/recipie-detail/recipie-detail.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipieStartComponent} from "./recipies/recipie-start/recipie-start.component";
import {RecipieEditComponent} from "./recipies/recipie-edit/recipie-edit.component";
import {FormPracticeComponent} from "./form-practice/form-practice.component";
import {RecipesResolverService} from "./recipies/recipes-resolver.service";
import {AuthorizationComponent} from "./authorization/authorization.component";
import {AuthGuard} from "./authorization/auth-guard";

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes',
    component: RecipiesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipieStartComponent},
      { path: 'new', component: RecipieEditComponent},
      { path: ':id',
        component: RecipieDetailComponent,
        resolve: [RecipesResolverService]
      },
      { path: ':id/edit',
        component: RecipieEditComponent,
        resolve: [RecipesResolverService]
     }]
  },
  { path: 'RecipeList', component: RecipieListComponent},
  { path: 'RecipeDetail', component: RecipieDetailComponent},
  { path: 'ShoppingList', component: ShoppingListComponent},
  { path: 'FormPractice', component: FormPracticeComponent},
  { path: 'Authorization', component: AuthorizationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
