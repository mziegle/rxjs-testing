import Axios from 'axios-observable';
import { catchError, map, of } from 'rxjs';

export function fact() {
    return Axios.get('https://catfact.ninja/fact')
        .pipe(
            map(response => response.data),
            catchError(error => of(error.response.statusText))
        );
}
