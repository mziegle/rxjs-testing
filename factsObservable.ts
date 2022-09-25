import { Observable, switchMap, tap, timer } from 'rxjs';

/**
 * This observable provides a stream of facts.
 *
 * @param pollInterval the interval period to fetch facts
 * @param source the source of the facts
 * @returns a stream of facts
 */
export function factsObservable(pollInterval: number, source: Observable<unknown>) {
    return timer(0, pollInterval)
        .pipe(
            switchMap(() => source),
            tap(value => console.log(value))
        );
}