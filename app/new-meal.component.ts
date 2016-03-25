import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h2>Add A New Meal To Track</h2>

        <input placeholder="Add a meal item" #newItem>
        <input placeholder="Add Description" #newDescription>
        <input placeholder="Calories" type="number" #newCalories>

      <button (click)="addMeal(newItem, newDescription, newCalories)">Add Meal</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userItem: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement) {
    this.onSubmitNewMeal.emit([userItem.value, userDescription.value, userCalories.value]);
    userItem.value = "";
    userDescription.value = "";
    userCalories.value = "";
  }
}
