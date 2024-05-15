import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GenreCardComponent } from './genre-card/genre-card.component';
import { ActorCardComponent } from './actor-card/actor-card.component';
import { DirectorCardComponent } from './director-card/director-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileFormComponent } from './edit-user-profile-form/edit-user-profile-form.component';
import { EditMovieFormComponent } from './edit-movie-form/edit-movie-form.component';
import { EditGenreFormComponent } from './edit-genre-form/edit-genre-form.component';
import { EditActorFormComponent } from './edit-actor-form/edit-actor-form.component';
import { EditDirectorFormComponent } from './edit-director-form/edit-director-form.component';
import { NewActorFormComponent } from './new-actor-form/new-actor-form.component';
import { NewDirectorFormComponent } from './new-director-form/new-director-form.component';
import { NewMovieFormComponent } from './new-movie-form/new-movie-form.component';
import { NewGenreFormComponent } from './new-genre-form/new-genre-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
    NavbarComponent,
    FooterComponent,
    GenreCardComponent,
    ActorCardComponent,
    DirectorCardComponent,
    UserProfileComponent,
    EditUserProfileFormComponent,
    EditMovieFormComponent,
    EditGenreFormComponent,
    EditActorFormComponent,
    EditDirectorFormComponent,
    NewActorFormComponent,
    NewDirectorFormComponent,
    NewMovieFormComponent,
    NewGenreFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    OverlayModule
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
