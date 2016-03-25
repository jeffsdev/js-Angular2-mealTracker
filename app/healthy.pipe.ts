import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "healthy",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredHealthyState = args[0];
    if(desiredHealthyState === "unhealthy") {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else if (desiredHealthyState === "healthy") {
      return input.filter((meal) => {
        return meal.calories < 300;
      });
    } else if (desiredHealthyState === "all") {
        return input.filter((meal) => {
          return meal.calories > 0;
      });
    }
  }
}
