export interface ReportFilterDropDownType {
    role: string;
    accountStatus: string;
    onRoleChange: React.Dispatch<React.SetStateAction<string>>;
    onAccountStatusChange:React.Dispatch<React.SetStateAction<string>>;
}

export interface ReportFilterType extends ReportFilterDropDownType {
    onGeneralSearchChange: React.Dispatch<React.SetStateAction<string>>;
}
