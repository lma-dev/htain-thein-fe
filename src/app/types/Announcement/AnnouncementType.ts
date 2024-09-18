import { UserType } from "../User/UserType";

export type AnnouncementType = {
    id: number;
    title: string;
    content: string;
    isVisible: number; 
    slug: string;
    priority: number; 
    dueDate: string; 
    userInfo?: UserType;
    createdAt: string;
}
