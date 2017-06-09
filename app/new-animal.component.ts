import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <button id='newAnimalFormButton' class='btn btn-success btn-lg' (click)='toggleNewAnimalForm()'>Add A New Animal</button>
  <div *ngIf='newAnimalForm'>
    <h3>Add a New Animal</h3>
    <label>Name:</label>
    <input #newName>
    <label>Species:</label>
    <input #newSpecies>
    <label>Age:</label>
    <input #newAge>
    <label>Diet:</label>
    <input #newDiet>
    <label>Location:</label>
    <input #newLocation>
    <label>Number of Caretakers:</label>
    <input #newCaretakers>
    <label>Sex:</label>
    <input #newSex>
    <label>Likes:</label>
    <input #newLikes>
    <label>Dislikes:</label>
    <input #newDislikes>
    <button class='btn btn-success' (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newName.value=''; newSpecies.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
  </div>
  <hr>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  newAnimalForm = false;

  toggleNewAnimalForm() {
    this.newAnimalForm = !this.newAnimalForm;
  }

  submitForm(name: string, species: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var date = new Date();
    var dateAdmitted = date.toDateString();
    var newAnimalToAdd: Animal = new Animal(name, species, age, diet, location, caretakers, sex, likes, dislikes, dateAdmitted);
    this.newAnimalSender.emit(newAnimalToAdd);
    this.newAnimalForm = false;
  }
}
