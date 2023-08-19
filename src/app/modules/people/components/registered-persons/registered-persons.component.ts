import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs';
import { People, Person } from 'src/app/data/interfaces/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-registered-persons',
  templateUrl: './registered-persons.component.html',
  styleUrls: ['./registered-persons.component.scss'],
})
export class RegisteredPersonsComponent implements OnInit, AfterViewInit {
  constructor(private personService: PersonService) {}
  people!: Person[];
  dataSource!: MatTableDataSource<Person>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name', 'last_name', 'age', 'address', 'email'];
  ngOnInit() {}

  ngAfterViewInit() {
    this.personService
      .getRegisteredPersons()
      .pipe(take(1))
      .subscribe((res: People) => {
        this.dataSource = new MatTableDataSource(res.people);
        this.dataSource.sort = this.sort;
        this.paginator._intl.itemsPerPageLabel = 'Items por pagina';
        this.paginator._intl.nextPageLabel = 'Siguiente pagina';
        this.paginator._intl.previousPageLabel = 'Pagina anterior';
        this.dataSource.paginator = this.paginator;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
