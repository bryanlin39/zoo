import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class='row'>
    <div class='col-md-6'>
      <h4>Filters:</h4>
      <select (change)='onChange($event.target.value)'>
        <option value='allAnimals'>All Animals</option>
        <option value='youngAnimals'>2 Years Old or Younger</option>
        <option value='oldAnimals'>Older Than 2 Years Old</option>
      </select>
    </div>

    <div class='col-md-6'>
      <h4>Exhibit Coding:</h4>
      <p class='bg-info'>Arctic Exhibit</p>
      <p class='bg-warning'>Safari Exhibit</p>
      <p class='bg-success'>Rainforest Exhibit</p>
    </div>
  </div>

  <h3>Current Residents</h3>
  <ul>
    <li *ngFor="let animal of animalList | age:filterByAge" [class]='locationColor(animal)'>
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
        <li><b>Date Admitted:</b> {{animal.date}}</li>
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

  locationColor(animal) {
    if (animal.location === 'Arctic Exhibit') {
      return 'bg-info';
    } else if (animal.location === 'Safari Exhibit') {
      return 'bg-warning';
    } else {
      return 'bg-success';
    }
  }
}
