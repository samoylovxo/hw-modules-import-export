import character from './domain';

class Game {
  start() {
    console.log('game started');
  }
}

const game = new Game();
export default game;

export class GameSavingData {}

export function readGameSaving() {}

export function writeGameSaving() {}
