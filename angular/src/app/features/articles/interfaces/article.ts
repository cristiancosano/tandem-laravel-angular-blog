import { User } from "@features/users/interfaces/user";

export interface Article{
    title: string;
    description: string;
    author: User;
    published_at: string;
}