import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
      <input [(ngModel)]="meal.name" placeholder="Edit a meal item">
      <input [(ngModel)]="meal.description" placeholder="Edit Description">
      <input [(ngModel)]="meal.calories" placeholder="Edit Calories">
    </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
