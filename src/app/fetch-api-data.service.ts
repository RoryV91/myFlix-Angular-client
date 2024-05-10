import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// Declaring the api url that will provide data for the client app
const apiUrl = 'https://myflixapi.vanblaricom.dev:9999';

@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {
  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}
  
  public extractResponseData(res: any): any {
    const body = res;
    return body || {};
  }

  // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + '/users/new', userDetails)
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call for the user login endpoint
  public userLogin(credentials: any): Observable<any> {
    return this.http
      .post(apiUrl + '/login', credentials)
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call for the get all movies endpoint
  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get<any>(apiUrl + '/movies', { headers: headers })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }


  // Making the api call for the get one movie endpoint
  public getMovie(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get<any>(apiUrl + '/movies/' + id, { headers: headers })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call for the get directors endpoint
  public getAllDirectors(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get<any>(apiUrl + '/directors', { headers: headers })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  // Making the api call got the get one director endpoint
  public getDirector(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get<any>(apiUrl + '/directors/' + id, { headers: headers })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call for the get all actors endpoint
  public getAllActors(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get<any>(apiUrl + '/actors', { headers: headers })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call got the get one actor endpoint
  public getActor(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get<any>(apiUrl + '/actors/' + id, { headers: headers })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call for the get genres endpoint
  public getAllGenres(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get<any>(apiUrl + '/genres', { headers: headers })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call got the get one genre endpoint
  public getGenre(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get<any>(apiUrl + '/genres/' + id, { headers: headers })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call for the get user endpoint
  public getUser(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get<any>(apiUrl + '/users/' + id, { headers: headers })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call for the get user favorites endpoint
  public getUserFavorites(userId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get<any>(apiUrl + '/users/' + userId + '/favorites', { headers: headers })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call for the add movie to favorites endpoint
  public addMovieToFavorites(userId: string, movieId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .post(
        apiUrl + '/users/' + userId + '/favorites/add',
        { movieId: movieId },
        { headers: headers }
      )
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call for the remove movie from favorites endpoint
  public removeMovieFromFavorites(
    userId: string,
    movieId: string
  ): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .put(
        apiUrl + '/users/' + userId + '/favorites/remove',
        { movieId: movieId },
        { headers: headers }
      )
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call for the update user endpoint
  public updateUser(userId: string, updatedInfo: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .put(apiUrl + '/users/' + userId, updatedInfo, { headers: headers })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call for the delete user endpoint
  public deleteUser(userId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .delete(apiUrl + '/users/' + userId + '/delete', { headers: headers })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Errors will be handled by the handleError method
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
