import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <h1>OmNomNom MealTrakr</h1>
    <meal-list
      [mealList]="meals">
    </meal-list>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Pizza", "3 slices of pepperoni pizza", 300),
      new Meal("Salad", "Organic kale salad", 150),
      new Meal("Coffee", "This counts as a meal, right?", 200)
    ];
  }
}
