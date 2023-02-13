import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthAccessGuard } from '../auth/guards/gql-auth.guard';
import { IContext } from 'src/commons/interfaces/context';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @Query(() => [User])
  fetchUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User)
  fetchUser(
    @Args('userId') userId: string, //
  ): Promise<User> {
    return this.usersService.findOne({ userId });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => User)
  fetchLoginUser(
    @Context() context: IContext, //
  ): Promise<User> {
    console.log(context);
    return this.usersService.findOne({ userId: context.req.user.id });
    // : string {
    //   // 유저 정보 꺼내오기
    //   console.log('================');
    //   console.log(context.req.user);
    //   console.log('================');
    //   return '인가에 성공하였습니다';
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => User)
  updateUserPwd(
    @Args('pwd') pwd: string,
    @Context() context: IContext,
  ): Promise<User> {
    return this.usersService.updatePwd({
      userId: context.req.user.id,
      pwd,
    });
  }

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.create({ createUserInput });
  }

  @Mutation(() => User)
  updateUser(
    @Args('userId') userId: string,
    @Args('updateuserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.usersService.update({ userId, updateUserInput });
  }

  @Mutation(() => Boolean)
  deleteUser(
    @Args('userId') userId: string, //
  ): Promise<boolean> {
    return this.usersService.delete({ userId });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Boolean)
  deleteLoginUser(@Context() context: IContext): Promise<boolean> {
    return this.usersService.delete({ userId: context.req.user.id });
  }
}
