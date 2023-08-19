import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteredPersonsComponent } from './components/registered-persons/registered-persons.component';
import { RegisterPersonComponent } from './components/register-person/register-person.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [RegisteredPersonsComponent, RegisterPersonComponent],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [RegisteredPersonsComponent, RegisterPersonComponent],
})
export class PeopleModule {}
