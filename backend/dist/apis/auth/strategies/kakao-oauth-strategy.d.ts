import { Profile } from 'passport-kakao';
declare const KakaoStrategy_base: new (...args: any[]) => any;
export declare class KakaoStrategy extends KakaoStrategy_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: Profile): {
        name: any;
        email: any;
        password: string;
        age: number;
        id: any;
    };
}
export {};
