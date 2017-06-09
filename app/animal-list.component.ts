import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)='onChange($event.target.value)'>
    <option value='allAnimals'>All Animals</option>
    <option value='youngAnimals'>2 Years Old or Younger</option>
    <option value='oldAnimals'>Older Than 2 Years Old</option>
  </select>

  <h3>Current Residents</h3>
  <ul>
    <li *ngFor="let animal of animalList | age:filterByAge">
      {{animal.name}}
      <button class='btn btn-primary btn-sm' id='editAnimalButton' (click)='editAnimalButton(animal)'>Edit</button>
      <ul>
        <li><b>Species:</b> {{animal.species}}</li>
        <li><b>Age:</b> {{animal.age}}</li>
        <li><b>Diet:</b> {{animal.diet}}</li>
        <li><b>Location:</b> {{animal.location}}</li>
        <li><b>Number of Caretakers:</b> {{animal.caretakers}}</li>
        <li><b>Sex:</b> {{animal.sex}}</li>
        <li><b>Likes:</b> {{animal.likes}}</li>
        <li><b>Dislikes:</b> {{animal.dislikes}}</li>
      </ul>
      <br>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() animalList: Animal[];
  @Output() editAnimalSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  editAnimalButton(animalToEdit: Animal) {
    this.editAnimalSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
