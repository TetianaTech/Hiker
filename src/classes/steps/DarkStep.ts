import StepOption from "../stepOptions/StepOption";
import Step from "../baseSteps/Step";
import IGameState from "../../interfaces/IGameState";
import { DARK_OPTIONS } from "../../constants/options";
import { STEPS } from "../../constants/steps";

class DarkStep extends Step {
  name: string
  question: string
  options: StepOption[]
  constructor(state: IGameState) {
    super(state)
    this.name = STEPS.DARK
    this.question = 'It\'s getting dark. Do you want to speed up?'
    this.options = [
      new StepOption(
        DARK_OPTIONS.SPEED_UP,
        'Speed up',
        'You continued the route at a faster pace.',
        0,
        +10
      ),
      new StepOption(
        DARK_OPTIONS.CONTINUE,
        'Continue at the same pace',
        'You continued the route at the same pace.',
        -10,
        0
      ),
    ]
  }

  handleInput(input: StepOption) {
    return super.handleInput(input)
  }
}

export default DarkStep