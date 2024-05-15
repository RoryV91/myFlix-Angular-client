import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  movies: any[] = [];
  favoritedMovies: string[] = [];
  user: any = null;

  constructor(public fetchApiData: FetchApiDataService) {}

  ngOnInit(): void {
    this.getMovies();
    const userObj = JSON.parse(localStorage.getItem('user') as string);
    this.fetchApiData.getUserFavorites(userObj._id).subscribe((favorites) => {
      this.favoritedMovies = favorites;
    });
  }

getMovies(): void {
  forkJoin({
    movies: this.fetchApiData.getAllMovies(),
    directors: this.fetchApiData.getAllDirectors(),
    actors: this.fetchApiData.getAllActors(),
    genres: this.fetchApiData.getAllGenres(),
  })
    .pipe(
      map(({ movies, directors, actors, genres }) =>
        movies.map((movie: any) => ({
          ...movie,
          director_ids: movie.director_ids.map(
            (id: string) =>
              directors.find((director: any) => director._id === id) || null
          ),
          actor_ids: movie.actor_ids.map(
            (id: string) =>
              actors.find((actor: any) => actor._id === id) || null
          ),
          genre_ids: movie.genre_ids.map(
            (id: string) =>
              genres.find((genre: any) => genre._id === id) || null
          ),
        }))
      ),
      map((movies: any[]) => movies.sort((a, b) => {
        const titleA = a.title.replace(/^(The |A )/, '');
        const titleB = b.title.replace(/^(The |A )/, '');
        return titleA.localeCompare(titleB);
      }))
    )
    .subscribe((movies) => {
      this.movies = movies;
    });
}

  addFavorite(movieId: string): void {
    const userObj = JSON.parse(localStorage.getItem('user') as string);
    this.fetchApiData
      .addMovieToFavorites(userObj._id, movieId)
      .subscribe(() => {
        this.favoritedMovies.push(movieId);
      });
  }

  removeFavorite(movieId: string): void {
    const userObj = JSON.parse(localStorage.getItem('user') as string);
    this.fetchApiData
      .removeMovieFromFavorites(userObj._id, movieId)
      .subscribe(() => {
        this.favoritedMovies = this.favoritedMovies.filter(
          (id) => id !== movieId
        );
      });
  }

  toggleFavorite(movieId: string): void {
  if (this.favoritedMovies.includes(movieId)) {
    this.removeFavorite(movieId);
  } else {
    this.addFavorite(movieId);
  }
}
  
}
