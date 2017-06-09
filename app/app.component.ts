import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Bryan's Zoo</h1>
    <div class='row'>
      <div class='col-md-6'>
        <animal-list [animalList]='animals' (editAnimalSender)='editAnimal($event)'></animal-list>
      </div>
      <div class='col-md-6'>
        <new-animal (newAnimalSender)='addNewAnimal($event)'></new-animal>
        <edit-animal [animalToEdit]='selectedAnimal' (finishedEditingSender)='finishedEditing()'></edit-animal>
      </div>
    </div><!--row-->
  </div><!--container-->
  `
})

export class AppComponent {
  selectedAnimal = null;

  animals: Animal[] = [
    new Animal('Kevin', 'Penguin', 1, 'Carnivore', 'Arctic Exhibit', 3, 'Female', 'Slippery slides', 'Kids that knock on the glass enclosure', 'Mon Mar 13 2017'),
    new Animal('Bob', 'Giraffe', 6, 'Herbivore', 'Safari Exhibit', 6, 'Male', 'Tall trees', 'Visitors that take pictures with their iPad', 'Fri Jun 09 2017')
  ];

  addNewAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

}
