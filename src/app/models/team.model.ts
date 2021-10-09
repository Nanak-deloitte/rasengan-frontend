// private String teamName;
// private int scores;
// private UserDetailDTO sectionLead;
// // private List<UserDetailDTO> members;

import { IUser } from "./user.model";

export interface ITeam {
    teamId: number;
    teamName: string;
    totalScore: number;
    sectionLead: IUser;
    members: IUser[];
    eventScores:number[];
}
