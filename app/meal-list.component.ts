import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { HealthyPipe } from './healthy.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [HealthyPipe],
  // outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent, EditMealDetailsComponent],
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">All Meals</option>
      <option value="healthy">Healthy Meals (under 300 calories)</option>
      <option value="unhealthy">Unhealthy Meals (300+ calories)</option>
    </select>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    <meal-display *ngFor="#currentMeal of mealList | healthy:filterHealthy"
      [meal]="currentMeal" >
    </meal-display>
  `

})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
  createMeal([name, description, calories]) :void {
    var newMeal = new Meal(name, description, calories);
    this.mealList.push(newMeal);
  }

}
