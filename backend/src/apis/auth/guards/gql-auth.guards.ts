import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class GqlAuthAccessGuard extends AuthGuard('access') {
  // overriding , rest-api용도 함수 -> graphql 용도 함수
  getRequest(context: ExecutionContext) {
    // context : request 요청에 포함된 Headers등의 내용들이 담겨있다. rest-api 용.
    const gqlContext = GqlExecutionContext.create(context); // context를 gql용으로 바꿔준다.
    return gqlContext.getContext().req; // gql용 context에서 req만 뽑아서 준다.
  }
}
