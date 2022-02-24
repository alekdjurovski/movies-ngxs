import { Movies } from "../models/movies.model";

export class AddMovie {
    static readonly type = '[Movie] add';
    constructor(public payload: Movies ) {}
}

export class RemoveMovie {
    static readonly type = '[Movie] remove';
    constructor(public payload: Movies ) {}
}