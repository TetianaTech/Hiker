import GameState from "../classes/GameState";
import StepOption from "../classes/stepOptions/StepOption";

interface IStep {
  state: GameState;
  name: string;
  question: string;
  options: StepOption[]
  handleInput: (input: StepOption) => IStep | undefined
}

export default IStep
