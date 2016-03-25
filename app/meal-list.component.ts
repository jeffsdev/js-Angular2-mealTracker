import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  // outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent, EditMealDetailsComponent],
  template: `
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    <meal-display *ngFor="#currentMeal of mealList"
      [meal]="currentMeal" >
    </meal-display>
  `

})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  createMeal([name, description, calories]) :void {
    var newMeal = new Meal(name, description, calories);
    this.mealList.push(newMeal);
  }

}
