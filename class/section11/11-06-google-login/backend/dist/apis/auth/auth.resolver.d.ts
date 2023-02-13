import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { IContext } from 'src/commons/types/context';
export declare class AuthResolver {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(email: string, password: string, context: IContext): Promise<string>;
    restoreAccessToken(context: IContext): string;
}
