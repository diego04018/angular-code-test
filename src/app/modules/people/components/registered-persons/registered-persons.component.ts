import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { People, Person } from 'src/app/data/interfaces/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-registered-persons',
  templateUrl: './registered-persons.component.html',
  styleUrls: ['./registered-persons.component.scss'],
})
export class RegisteredPersonsComponent implements OnInit {
  constructor(private personService: PersonService) {}
  people!: Person[];
  displayedColumns: string[] = ['name', 'last_name', 'age', 'address', 'email'];
  ngOnInit() {
    this.personService
      .getRegisteredPersons()
      .pipe(take(1))
      .subscribe((res: People) => {
        this.people = res.people;
      });
  }
}
