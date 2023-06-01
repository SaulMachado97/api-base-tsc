import { Auth } from "./authInterface";

export interface User extends Auth{
    name: string;
    lastname: string;
    year: number;
    profession: string;
}