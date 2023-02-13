import { Request, Response } from 'express';

export interface IAuthUser {
  user?: {
    // user가 있을수도 잇고 없을수도 있기때문에 ?를 써준다
    id: string;
  };
}

export interface IContext {
  req: Request & IAuthUser;
  res: Response;
}
