import { AnnouncementType } from "../Announcement/AnnouncementType";
import { ReportType } from "../Report/ReportType";
import { UserType } from "../User/UserType";
  
 export interface NotificationDataType {
    id: number;
    userData: UserType;
    reportData: ReportType; 
    announcementData: AnnouncementType;
    firebaseNotificationId: string;
    createdAt: string | null;
    updatedAt: string | null;
  }