export interface DataItem {
 type?: string;     
  amount?: number;  
  updated_at?: string;
  description?: string;
  [key: string]: string | number | null | undefined;
  }
  
 export interface ReportHistoryType {
    id: number;      
  editor: string;   
  oldData: DataItem | null; 
  newData: DataItem | null; 
  updatedAt: string; 
  }
  