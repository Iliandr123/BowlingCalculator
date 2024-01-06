import Game from "./BowlingCalculation";

describe('Bowling Calculation', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    })

    function rollMany(n: number, pins: number): void {
        for(let i=0; i<n; i++){
            game.roll(pins);
        }
    }

    function rollSpare(){
        rollMany(2,5);
    }

    it('all zeros', () => {
        rollMany(20, 0);
        expect(game.score()).toBe(0);
    })

    it('all ones', () => {
        rollMany(20,1);
        expect(game.score()).toBe(20);
    })

    it('one spare', () => {
        rollSpare();
        game.roll(7);
        rollMany(17, 0);
        expect(game.score()).toBe(24);
    })

    it('one strike', () => {
        game.roll(10);
        game.roll(2);
        game.roll(3);
        rollMany(16, 0);
        expect(game.score()).toBe(20);
    })

    it('perfect game', () => {
        rollMany(12, 10);
        expect(game.score()).toBe(300);
    })
})