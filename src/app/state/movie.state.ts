import { Movies } from '../models/movies.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddMovie, RemoveMovie } from '../action/movies.action';

export class MovieStateModel {
  movies: Movies[] = [];
}

@State<MovieStateModel>({
  name: 'movies',
  defaults: {
    movies: [],
  },
})
export class MovieState {
  @Selector()
  static getMovies(state: MovieStateModel) {
    return state.movies;
  }

  @Action(AddMovie)
  add(
    { getState, patchState }: StateContext<MovieStateModel>,
    { payload }: AddMovie
  ) {
    const state = getState();
    patchState({
      movies: [...state.movies, payload],
    });
  }

  @Action(RemoveMovie)
  remove(
    { getState, patchState }: StateContext<MovieStateModel>,
    { payload }: RemoveMovie
  ) {
    const state = getState();
    patchState({
      movies: state.movies.filter((movie) => movie.name !== payload.name),
    });
  }
}
