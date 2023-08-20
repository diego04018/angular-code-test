import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { catchError, take, throwError } from 'rxjs';
import { People, Person } from 'src/app/data/interfaces/person.interface';
import { PersonService } from 'src/app/services/person.service';
import { columns, displayedColumns } from './table-model/table-model';
import { NotificationService } from 'src/app/services/notification.service';
import { PaginationOptions } from 'src/app/data/enums/paginators.enums';

@Component({
  selector: 'app-registered-persons',
  templateUrl: './registered-persons.component.html',
  styleUrls: ['./registered-persons.component.scss'],
})
export class RegisteredPersonsComponent implements AfterViewInit {
  constructor(
    private personService: PersonService,
    private notify: NotificationService
  ) {}
  dataSource!: MatTableDataSource<Person>;
  isSpinnerLoading = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  tableColumns = columns;
  renderColumns = displayedColumns;

  ngAfterViewInit() {
    this.personService
      .getRegisteredPersons()
      .pipe(
        take(1),
        catchError(() =>
          throwError(() => {
            this.notify.errorMessage(
              'ha ocurrido un error porfavor vuelva a intentarlo'
            );
            this.isSpinnerLoading = false;
          })
        )
      )
      .subscribe((res: People) => {
        this.dataSource = new MatTableDataSource(res.people);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.paginator._intl.itemsPerPageLabel =
          PaginationOptions.ITEMS_PER_PAGE;
        this.paginator._intl.nextPageLabel = PaginationOptions.NEXT_PAGE;
        this.paginator._intl.previousPageLabel = PaginationOptions.LAST_PAGE;
        this.isSpinnerLoading = false;
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
