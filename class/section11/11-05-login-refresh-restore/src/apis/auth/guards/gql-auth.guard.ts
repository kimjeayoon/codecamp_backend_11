// import { ExecutionContext } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { GqlExecutionContext } from '@nestjs/graphql';

// export class GqlAuthAccessGuard extends AuthGuard('access') {
//   getRequest(context: ExecutionContext) {
//     console.log('!1111');
//     const gqlContext = GqlExecutionContext.create(context);
//     return gqlContext.getContext().req;
//   }
// }
// gql-auth.guard.ts

import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export const GqlAuthGuard = (name) => {
  return class GqlAuthAccessGuard extends AuthGuard('access') {
    getRequest(context: ExecutionContext) {
      const gqlContext = GqlExecutionContext.create(context);
      return gqlContext.getContext().req;
    }
  };
};
// export class GqlAuthRefreshGuard extends AuthGuard('refresh') {
//   getRequest(context: ExecutionContext) {
//     const gqlContext = GqlExecutionContext.create(context);
//     return gqlContext.getContext().req;
//   }
// }
