import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { User } from '../entities/user.entity';

export interface IUsersServiceCreate {
  createUserInput: CreateUserInput;
}

export interface IUsersServiceDelete {
  userId: string;
}

export interface IUsersServiceUpdate {
  userId: string;
  updateUserInput: UpdateUserInput;
}

export interface IUsersServiceFindOne {
  userId: string;
}

export interface IUsersServiceFindOneFyEmail {
  email: string;
}

export interface IUsersServiceFindOneFyPersonal {
  personal: string;
}

export class IUserServiceHashed {
  pwd: string;
}

export class IUserServiceUpdatePwd {
  userId: string;
  pwd: string;
}
