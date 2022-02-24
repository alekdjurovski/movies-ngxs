import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddMovie } from '../action/movies.action';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent {
  constructor(private store: Store) {}

  addMovie(name: string, url: string) {
    this.store.dispatch(new AddMovie({name, url}) )
  }
}
