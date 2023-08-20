import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteredPersonsComponent } from './components/registered-persons/registered-persons.component';
import { RegisterPersonComponent } from './components/register-person/register-person.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PeopleRoutingModule } from './people-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [RegisteredPersonsComponent, RegisterPersonComponent],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    PeopleRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  exports: [RegisteredPersonsComponent, RegisterPersonComponent],
})
export class PeopleModule {}
