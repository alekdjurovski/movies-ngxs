import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemoveMovie } from '../action/movies.action';
import { Movies } from '../models/movies.model';

@Component({
  selector: 'app-read-movies',
  templateUrl: './read-movies.component.html',
  styleUrls: ['./read-movies.component.scss'],
})
export class ReadMoviesComponent {
  movies$: Observable<any>;
  constructor(private store: Store) {
    this.movies$ = this.store.select((state) => state.movies.movies);
  }

  deleteMovie(name: Movies) {
    this.store.dispatch(new RemoveMovie(name));
  }
}
