import { Profile, Strategy } from 'passport-naver-v2';
declare const NaverStrategy_base: new (...args: any[]) => Strategy;
export declare class NaverStrategy extends NaverStrategy_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: Profile): {
        name: string;
        email: string;
        password: string;
        age: number;
        picture: string;
        mobile: string;
    };
}
export {};
