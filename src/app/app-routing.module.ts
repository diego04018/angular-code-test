import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteredPersonsComponent } from './modules/people/components/registered-persons/registered-persons.component';
import { RegisterPersonComponent } from './modules/people/components/register-person/register-person.component';

const routes: Routes = [
  { path: '', redirectTo: 'register-person', pathMatch: 'full' },
  { path: 'register-person', component: RegisterPersonComponent },
  { path: 'registered-persons', component: RegisteredPersonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
