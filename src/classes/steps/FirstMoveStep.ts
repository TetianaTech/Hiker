import StepOption from "../stepOptions/StepOption";
import Step from "../baseSteps/Step";
import IGameState from "../../interfaces/IGameState";
import diContainer from "../../services/DIContainer";
import { FIRST_MOVE_OPTIONS } from "../../constants/options";
import { STEPS } from "../../constants/steps";

class FirstMoveStep extends Step {
  name: string
  question: string
  options: StepOption[]
  constructor(state: IGameState) {
    super(state)
    this.name = STEPS.FIRST_MOVE
    this.question = 'You stand at the base of the mountain. What\'s your first move?'
    this.options = [
      new StepOption(
        FIRST_MOVE_OPTIONS.START,
        'Begin the hike immediately.',
        '',
        5,
        0
      ),
      new StepOption(
        FIRST_MOVE_OPTIONS.CHECK,
        'Take a moment to check your gear.',
        'You checked your gears and found out that you forgot to pack your raincoat. You went to the car to get it and started the trip.',
        5,
        -5
      ),
      new StepOption(
        FIRST_MOVE_OPTIONS.CHAT,
        'Chat with fellow hikers for advice.',
        'You chatted with other hikers and discovered that there is a Cheese Factory on the green route and then started the trip.',
        10,
        -5
      ),
    ]
  }

  handleInput(input: StepOption) {
    super.setNextStep(diContainer.get('TrailSplitStep'))
    return super.handleInput(input)
  }
}

export default FirstMoveStep