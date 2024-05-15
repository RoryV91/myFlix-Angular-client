import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss']
})
export class GenreCardComponent implements OnInit {
  genres: any[] = []; // replace 'any' with the actual type of your genre object

  constructor(public fetchApiData: FetchApiDataService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(): void {
    this.fetchApiData.getAllGenres().subscribe((genres: any[]) => {
      this.genres = genres;
    });
  }
}