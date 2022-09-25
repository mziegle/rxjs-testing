import { fact } from './fact';
import { factsObservable } from './factsObservable';

(async function run() {
    factsObservable(1000, fact());
})()
