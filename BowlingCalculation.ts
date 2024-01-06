export default class Game {

    private rolls: number[] = Array(21).fill(0);
    private currentRole: number = 0;

    private isSpare(frameIndex: number): boolean {
        return this.rolls[frameIndex] + this.rolls[frameIndex+1] == 10;
    }

    private spareBonus(frameIndex: number): number {
        return this.rolls[frameIndex+2];
    }

    private isStrike(frameIndex: number): boolean {
        return this.rolls[frameIndex] == 10;
    }

    private strikeBonus(frameIndex: number): number {
        return this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
    }

    public roll(pins: number): void {
        this.rolls[this.currentRole++] = pins;
    }

    public score(): number {
        let gameScore: number = 0;
        let frameIndex: number = 0;
        for(let frame = 0; frame<10; frame++){
            if(this.isStrike(frameIndex)) {
                gameScore += 10 + this.strikeBonus(frameIndex);
                frameIndex+=1;
            }
            else if(this.isSpare(frameIndex)){
                gameScore += 10 + this.spareBonus(frameIndex);
                frameIndex+=2;
            }
            else {
                gameScore += this.rolls[frameIndex] + this.rolls[frameIndex+1];
                frameIndex+=2;
            }
        }
        return gameScore;
    }
}