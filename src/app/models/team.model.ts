// private String teamName;
// private int scores;
// private UserDetailDTO sectionLead;
// // private List<UserDetailDTO> members;

import { IUser } from "./user.model";

export interface ITeam {
    teamName: string;
    scores: number;
    sectionLead: IUser;
    members: IUser[];
}
