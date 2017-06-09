import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Bryan's Zoo</h1>
    <div class='row'>
      <div class='col-md-6'>
        <animal-list [animalList]='animals'></animal-list>
      </div>
      <div class='col-md-6'>
        <new-animal (newAnimalSender)='addNewAnimal($event)'></new-animal>
      </div>
    </div><!--row-->
  </div><!--container-->
  `
})

export class AppComponent {
  selectedAnimal = null;

  animals: Animal[] = [
    new Animal('Kevin', 'Penguin', 4, 'Carnivore', 'Arctic Exhibit', 3, 'Female', 'Slippery slides', 'Kids that knock on the glass enclosure'),
    new Animal('Bob', 'Giraffe', 6, 'Herbivore', 'Safari Exhibit', 6, 'Male', 'Tall trees', 'Visitors that take pictures with their iPad')
  ];

  addNewAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  
}
