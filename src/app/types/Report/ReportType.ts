import { MetaDataType } from "../Share/MetaDataType";

export type ReportType ={
    id: number;
    amount: number;
    description: string;
    type: 'EXPENSE' | 'INCOME'; // Adjust according to possible types
    confirmStatus: boolean;
    reporter: User | null;
    verifier: User | null;
    createdAt: string; 
    updatedAt?: string;
  }
  
  type User = {
    id:number,
    name:string,
}

export type ReportsResponse={
    data:any,
    meta:any
}