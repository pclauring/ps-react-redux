import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('authors selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return author data formatted for dropdown', () =>
        {
            const authors = [
                {id: 'pierce-lauring', firstName: 'Pierce', lastName: 'Lauring'},
                {id: 'leslie-fay', firstName: 'Leslie', lastName: 'Fay'}
            ];

            const expected = [
                {value: 'pierce-lauring', text: 'Pierce Lauring'},
                {value: 'leslie-fay', text: 'Leslie Fay'}
            ];
            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });
    });
});