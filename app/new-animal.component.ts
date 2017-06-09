import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <button id='newAnimalFormButton' class='btn btn-success btn-lg' (click)='toggleNewAnimalForm()'>Add A New Animal</button>
  <div *ngIf='newAnimalForm'>
    <h3>Add a New Animal</h3>
    <label>Name:</label>
    <input #newName><br>
    <label>Species:</label>
    <input #newSpecies><br>
    <label>Age:</label>
    <input #newAge><br>
    <label>Diet:</label>
    <input #newDiet><br>
    <label># of Caretakers:</label>
    <input #newCaretakers><br>
    <label>Sex:</label>
    <input #newSex><br>
    <label>Likes:</label>
    <input #newLikes><br>
    <label>Dislikes:</label>
    <input #newDislikes><br>
    <label>Location:</label>
    <select #newLocation>
      <option>Arctic Exhibit</option>
      <option>Safari Exhibit</option>
      <option>Rainforest Exhibit</option>
    </select><br>
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
