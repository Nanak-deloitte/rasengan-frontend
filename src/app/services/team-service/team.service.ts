import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ITeam } from 'src/app/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  team: ITeam;
  
  getStatusChanged = new Subject<ITeam>();
  private teamURL = "http://localhost:8080/api/team/getTeamById/";

  constructor(private http: HttpClient) { }

  getTeam(teamId: number): Observable<ITeam> {
    return this.http.get<ITeam>(this.teamURL + teamId);
}

  // getTeam(teamId: number){
  //   this.http.get<ITeam>(this.teamURL + teamId).subscribe((team: ITeam) => {
  //     this.team = team;
  //     console.log(this.team);
  //     this.getStatusChanged.next();
  //   });
}


