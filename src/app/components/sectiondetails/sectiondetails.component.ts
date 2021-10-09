import { Component, Input, OnInit } from '@angular/core';
import { ITeaminBatch } from 'src/app/models/batch.model';
import { ITeam } from 'src/app/models/team.model';

@Component({
  selector: 'app-sectiondetails',
  templateUrl: './sectiondetails.component.html',
  styleUrls: ['./sectiondetails.component.scss']
})
export class SectiondetailsComponent implements OnInit {

  constructor() { }
  @Input() team: ITeam;
  ngOnInit(): void {
  }

}
