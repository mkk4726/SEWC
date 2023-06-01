"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlAuthGuard = exports.GqlAuthRefreshGuard = exports.GqlAuthAccessGuard = void 0;
const graphql_1 = require("@nestjs/graphql");
const passport_1 = require("@nestjs/passport");
class GqlAuthAccessGuard extends (0, passport_1.AuthGuard)('access') {
    getRequest(context) {
        const gqlContext = graphql_1.GqlExecutionContext.create(context);
        return gqlContext.getContext().req;
    }
}
exports.GqlAuthAccessGuard = GqlAuthAccessGuard;
class GqlAuthRefreshGuard extends (0, passport_1.AuthGuard)('refresh') {
    getRequest(context) {
        const gqlContext = graphql_1.GqlExecutionContext.create(context);
        return gqlContext.getContext().req;
    }
}
exports.GqlAuthRefreshGuard = GqlAuthRefreshGuard;
const GqlAuthGuard = (name) => class GqlAuthRefreshGuard extends (0, passport_1.AuthGuard)(name) {
    getRequest(context) {
        const gqlContext = graphql_1.GqlExecutionContext.create(context);
        return gqlContext.getContext().req;
    }
};
exports.GqlAuthGuard = GqlAuthGuard;
//# sourceMappingURL=gql-auth.guards.js.map