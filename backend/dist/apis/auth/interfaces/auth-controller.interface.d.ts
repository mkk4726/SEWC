export interface IOAuthUser {
    user: {
        name: string;
        email: string;
        picture?: string;
        age: number;
        password: string;
        mobile?: string;
        id?: string;
    };
}
