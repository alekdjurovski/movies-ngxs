import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadMoviesComponent } from './read-movies/read-movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { NgxsModule } from '@ngxs/store';
import { MovieState } from './state/movie.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

@NgModule({
  declarations: [AppComponent, ReadMoviesComponent, AddMovieComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([MovieState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
