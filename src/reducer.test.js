import reducer from './reducer'; 
import * as actions from './actions'; 

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('reducer', () => {
    const guesses1 = [0, 5, 10]; 
    const guesses2 = [3, 4, 43];

    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: 'Unknown'})
        expect(state).toEqual([]);
        
    })
}) 