 import { IBatch, ITeaminBatch } from "./batch.model";

export interface IUser {

    userId: number;

    username: string;

    email: string;

    password: string;

    batch: IBatch;

    team: ITeaminBatch;

    admin: boolean;

    isSectionLead: boolean;

}

