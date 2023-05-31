import { User } from 'src/apis/users/entities/user.entity';
export declare class Essay {
    id: number;
    title: string;
    input_text: string;
    output_text: string;
    memo: string;
    feedback: string;
    createdAt: Date;
    user: User;
}
