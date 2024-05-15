import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { GenreCardComponent } from './genre-card/genre-card.component';
import { ActorCardComponent } from './actor-card/actor-card.component';
import { DirectorCardComponent } from './director-card/director-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileFormComponent } from './edit-user-profile-form/edit-user-profile-form.component';
import { EditActorFormComponent } from './edit-actor-form/edit-actor-form.component';
import { EditDirectorFormComponent } from './edit-director-form/edit-director-form.component';
import { EditGenreFormComponent } from './edit-genre-form/edit-genre-form.component';
import { EditMovieFormComponent } from './edit-movie-form/edit-movie-form.component';


const routes: Routes = [
  { path: 'login', component: UserLoginFormComponent },
  { path: 'register', component: UserRegistrationFormComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: 'genres', component: GenreCardComponent },
  { path: 'actors', component: ActorCardComponent },
  { path: 'directors', component: DirectorCardComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'edit-profile', component: EditUserProfileFormComponent },
  { path: 'edit-actor', component: EditActorFormComponent },
  { path: 'edit-director', component: EditDirectorFormComponent },
  { path: 'edit-genre', component: EditGenreFormComponent },
  { path: 'edit-movie', component: EditMovieFormComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
