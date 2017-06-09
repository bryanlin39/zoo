import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf='animalToEdit'>
    <h3>Update information for {{animalToEdit.name}} the {{animalToEdit.species}}:</h3>
    <label>Name:</label>
    <input [(ngModel)]="animalToEdit.name"><br>
    <label>Age:</label>
    <input [(ngModel)]="animalToEdit.age"><br>
    <label>Caretakers:</label>
    <input [(ngModel)]="animalToEdit.caretakers"><br>
    <button class='btn btn-primary' (click)='finishedEditingButton()'>Save Changes</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() animalToEdit: Animal;
  @Output() finishedEditingSender = new EventEmitter();

  finishedEditingButton() {
    this.finishedEditingSender.emit();
  }
}
