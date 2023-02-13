export interface IUsersServiceCreate {
  email: string;
  password: string;
  name: string;
  age: number;
}

export interface IUsersServiceFindOneFyEmail {
  email: string;
}
