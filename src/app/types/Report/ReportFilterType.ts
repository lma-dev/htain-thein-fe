export interface ReportFilterDropDownType {
    amount?: number;
    confirmStatus?: number;
    createdAt?: string;
    type?: string;
    onAmountChange: (amount: number|string) => void;
    onConfirmStatusChange: (confirmStatus: number|string) => void;
    onTypeChange: (type: string) => void;
    onCreatedAtChange: (createdAt: string) => void;
    t:any;
}

export interface ReportFilterType extends ReportFilterDropDownType {
    onGeneralSearchChange: (search: string) => void;
}
