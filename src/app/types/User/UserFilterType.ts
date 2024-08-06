export interface UserFilterDropDownType {
    role: string;
    accountStatus: string;
    onRoleChange: React.Dispatch<React.SetStateAction<string>>;
    onAccountStatusChange:React.Dispatch<React.SetStateAction<string>>;
}

export interface UserFilterType extends UserFilterDropDownType {
    onGeneralSearchChange: React.Dispatch<React.SetStateAction<string>>;
}
