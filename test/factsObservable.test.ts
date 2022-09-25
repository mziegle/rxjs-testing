import { interval, of, take, timer } from "rxjs";
import { TestScheduler } from "rxjs/testing";
import { factsObservable } from "../factsObservable";

describe('factsObservable', () => {

    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('delivers facts every seconds', () => {
        testScheduler.run((helpers) => {
            // setup
            const { expectObservable } = helpers;

            // exercise
            const source = factsObservable(1000, of('some fact')).pipe(take(3));

            // verify
            const expectedMarble = 'a 999ms b 999ms (c|)';
            const expectedValues = { a: 'some fact', b: 'some fact', c: 'some fact' };

            expectObservable(source).toBe(expectedMarble, expectedValues);
        });
    })
});