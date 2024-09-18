
export type RegularCostsType = {
    id: number;
    amount: number;
    description: string;
    reporter: User | null;
    verifier: User | null;
    createdAt: string;
    }

    type User = {
        id:number,
        name:string,
    }