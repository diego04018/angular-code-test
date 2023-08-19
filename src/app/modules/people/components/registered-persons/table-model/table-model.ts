import { PersonAttributes } from 'src/app/data/enums/person.enums';
import { Person } from 'src/app/data/interfaces/person.interface';

export const columns = [
  {
    columnDef: 'name',
    header: PersonAttributes.NAME,
    cell: (element: Person) => `${element.name}`,
  },
  {
    columnDef: 'last_name',
    header: PersonAttributes.LAST_NAME,
    cell: (element: Person) => `${element.last_name}`,
  },
  {
    columnDef: 'age',
    header: PersonAttributes.AGE,
    cell: (element: Person) => `${element.age}`,
  },
  {
    columnDef: 'address',
    header: PersonAttributes.ADDRESS,
    cell: (element: Person) => `${element.address ?? ''}`,
  },
  {
    columnDef: 'email',
    header: PersonAttributes.EMAIL,
    cell: (element: Person) => `${element.email}`,
  },
];

export const displayedColumns = columns.map((c) => c.columnDef);
