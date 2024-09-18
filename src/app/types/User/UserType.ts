export interface UserType{
    id: number;
    name:string;
    email:string;
    password?:string;
    role: string;
    accountStatus: string;
    createdAt?:string
}