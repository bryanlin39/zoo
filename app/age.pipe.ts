import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'age',
  pure: false
})


export class AgePipe implements PipeTransform {
  transform(input: Animal[], ageFilterSetting) {
    var output: Animal[] = [];
    if (ageFilterSetting === 'youngAnimals') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i])
        }
      }
      return output;
    } else if (ageFilterSetting === 'oldAnimals') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i])
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
