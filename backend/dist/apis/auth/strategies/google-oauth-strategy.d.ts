import { Profile, Strategy } from 'passport-google-oauth20';
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: Profile): {
        name: string;
        email: string;
        picture: string;
        password: string;
        age: number;
    };
}
export {};
