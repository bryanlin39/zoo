import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h3>Current Residents</h3>
  <ul>
    <li *ngFor="let animal of animalList">
      {{animal.name}}
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
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() animalList: Animal[];

}