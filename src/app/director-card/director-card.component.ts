import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-director-card',
  templateUrl: './director-card.component.html',
  styleUrls: ['./director-card.component.scss']
})
export class DirectorCardComponent implements OnInit {
  directors: any[] = []; 

  constructor(public fetchApiData: FetchApiDataService) {}

  ngOnInit(): void {
    this.getDirectors();
  }

  getDirectors(): void {
    this.fetchApiData.getAllDirectors().subscribe((directors: any[]) => {
      this.directors = directors;
    });
  }
}