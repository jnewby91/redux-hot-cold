import {GENERATE_AURAL_UPDATE,generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './actions';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('generateAuralUpdate', () => {
    it('Should return the action', ()=> {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE); 
    })
})

describe('RESTART_GAME', () => {
    it('Should return the action', ()=> {

        const correctAnswer = 5; 
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME); 
        expect(action.correctAnswer).toEqual(correctAnswer);
    })
})

describe('MAKE_GUESS', () => {
    it('Should return the action', ()=> {
        const guess = 7; 
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS); 
        expect(action.guess).toEqual(guess);
    })
})
 