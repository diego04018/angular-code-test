export interface Person {
  name: string;
  last_name: string;
  age: number;
  address?: string;
  email: string;
}

export interface People {
  people: Person[];
}
