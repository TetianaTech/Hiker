import diContainer from "../../services/DIContainer";
import StepOption from "../stepOptions/StepOption";
import IGameState from "../../interfaces/IGameState";
import { TRAIL_SPLIT_OPTIONS } from "../../constants/options";
import { StepWithWildBoar } from "../baseSteps/StepWithWildBoar";
import StepOptionWithBoar from "../stepOptions/StepOptionWithBoar";
import IBooleanGenerator from "../../interfaces/IBooleanGenerator";
import { STEPS } from "../../constants/steps";
class TrailSplitStep extends StepWithWildBoar {
  name: string
  question: string
  options: StepOption[]
  constructor(state: IGameState, booleanGenerator: IBooleanGenerator) {
    super(state, booleanGenerator)
    this.name = STEPS.BACK_TRAIL_SPLIT
    this.question = 'After walking for a bit, you\'ve reached the route split. Which route do you take to come back?'
    this.options = [
      new StepOptionWithBoar(
        TRAIL_SPLIT_OPTIONS.GREEN,
        'Green route (long distance, smooth rise)',
        'It was a long but gentle descent!',
        0,
        -35,
        0
      ),
      new StepOptionWithBoar(
        TRAIL_SPLIT_OPTIONS.BLUE,
        'Blue (medium distance, medium rise)',
        'You came down fast enough!',
        0,
        -30,
        15
      ),
      new StepOptionWithBoar(
        TRAIL_SPLIT_OPTIONS.RED,
        'Red (short distance, sharp rise)',
        'You came down in a matter of hours!',
        -10,
        -25,
        30
      ),
    ]
  }

  handleInput(input: StepOptionWithBoar) {
    super.setNextStep(diContainer.get('KolybaStep'))
    return super.handleInput(input)
  }
}

export default TrailSplitStep