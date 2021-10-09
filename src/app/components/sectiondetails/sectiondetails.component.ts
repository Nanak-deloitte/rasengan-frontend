import { Component, Input, OnInit } from '@angular/core';
import { ITeaminBatch } from 'src/app/models/batch.model';

@Component({
  selector: 'app-sectiondetails',
  templateUrl: './sectiondetails.component.html',
  styleUrls: ['./sectiondetails.component.scss']
})
export class SectiondetailsComponent implements OnInit {

  constructor() { }
  @Input() team: ITeaminBatch;
  ngOnInit(): void {
  }

}
