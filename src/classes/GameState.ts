import IInput from "../interfaces/IInput";
import IGameState from "../interfaces/IGameState";
import IStepOption from "../interfaces/IStepOption";

class GameState implements IGameState {
  mood: number;
  timeUntilDark: number;
  isComplete: boolean;
  inputs: IInput[];
  inputIndexMap: Record<string, number>;
  isDarkAsked: boolean;

  constructor() {
    this.mood = 0
    this.timeUntilDark = 100
    this.isComplete = false
    this.inputs = []
    this.inputIndexMap = {}
    this.isDarkAsked = false
  }

  addInput(input: IInput) {
    this.inputs.push(input)
    this.inputIndexMap[input.name] = this.inputs.length - 1
  }

  updateMood(delta: number) {
    this.mood += delta
  }

  setAsComplete() {
    this.isComplete = true
  }

  setAsDarkAsked() {
    this.isDarkAsked = true
  }

  updateTimeUntilDark(delta: number) {
    this.timeUntilDark = Math.max(this.timeUntilDark += delta, 0)
  }

  getState() {
    let message = this.isComplete
      ? 'Congrats! You\'ve completed your trip '
      : 'You haven\'t reached the top of mountain '

    if (this.mood >= 50) {
      message += this.isComplete
        ? 'and seem to have had a lot of fun :)))))'
        : 'but seem to have had a lot of fun. I would say that this is much more important :)))))'
    } else {
      message += this.isComplete
        ? 'but it looks like you didn\'t have much fun. Next time, try to make it more fun!! :((((('
        : 'and didn\'t enjoy the trip :((((('
    }

    return message
  }
}

export default GameState