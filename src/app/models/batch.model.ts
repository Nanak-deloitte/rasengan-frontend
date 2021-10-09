export interface IBatch {
    batchId: number;
    batchName: string;
    teams: ITeaminBatch[];
}

export interface ITeaminBatch {
    teamId: number;
    teamName: string;
    score: number;
}
