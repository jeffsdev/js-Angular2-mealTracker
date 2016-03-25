import { Component,EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
    outputs: ['onMealSelect'],
    directives: [EditMealDetailsComponent],
    template: `
      <div class="mealInfo">
        <h3 (click)="showDetails()">{{ meal.name }}</h3>
        <div class="mealDetails" [class.showDetails]="details">
          <p>Description: {{ meal.description }}</p>
          <p>Calories: {{ meal.calories }}</p>
          <button (click)="editInfo(meal)">Edit Meal</button>
          <edit-meal-details *ngIf="show" [meal]="selectedMeal"></edit-meal-details>
        </div>
      </div>
    `
})

export class MealComponent {
  public show: boolean = false;
  public details: boolean = false;
  public meal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  showDetails() {
    this.details = !this.details;
  }
  editInfo(clickedMeal: Meal) :void {
    this.show = !this.show;
    console.log(this.selectedMeal);
    this.selectedMeal = clickedMeal;
    // this.onMealSelect.emit(clickedMeal);
  }
}
