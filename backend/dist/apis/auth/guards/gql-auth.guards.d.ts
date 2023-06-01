import { ExecutionContext } from '@nestjs/common';
declare const GqlAuthAccessGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlAuthAccessGuard extends GqlAuthAccessGuard_base {
    getRequest(context: ExecutionContext): any;
}
declare const GqlAuthRefreshGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlAuthRefreshGuard extends GqlAuthRefreshGuard_base {
    getRequest(context: ExecutionContext): any;
}
export declare const GqlAuthGuard: (name: any) => {
    new (...args: any[]): {
        getRequest(context: ExecutionContext): any;
        canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
        logIn<TRequest extends {
            logIn: Function;
        } = any>(request: TRequest): Promise<void>;
        handleRequest<TUser = any>(err: any, user: any, info: any, context: ExecutionContext, status?: any): TUser;
        getAuthenticateOptions(context: ExecutionContext): import("@nestjs/passport").IAuthModuleOptions<any>;
    };
    apply(this: Function, thisArg: any, argArray?: any): any;
    call(this: Function, thisArg: any, ...argArray: any[]): any;
    bind(this: Function, thisArg: any, ...argArray: any[]): any;
    toString(): string;
    readonly length: number;
    arguments: any;
    caller: Function;
    readonly name: string;
    [Symbol.hasInstance](value: any): boolean;
};
export {};
