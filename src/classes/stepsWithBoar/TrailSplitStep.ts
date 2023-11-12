import StepOption from "../stepOptions/StepOption";
import StepOptionWithBoar from "../stepOptions/StepOptionWithBoar";
import IGameState from "../../interfaces/IGameState";
import diContainer from "../../services/DIContainer";
import { TRAIL_SPLIT_OPTIONS } from "../../constants/options";
import { StepWithWildBoar } from "../baseSteps/StepWithWildBoar";
import IBooleanGenerator from "../../interfaces/IBooleanGenerator";
import { STEPS } from "../../constants/steps";

class TrailSplitStep extends StepWithWildBoar {
  name: string
  question: string
  options: StepOption[]
  constructor(state: IGameState, booleanGenerator: IBooleanGenerator) {
    super(state, booleanGenerator)
    this.name = STEPS.TRAIL_SPLIT
    this.question = 'You\'ve been hiking for a while. You encounter a split in the trail. Which route do you take?'

    this.options = [
      new StepOptionWithBoar(
        TRAIL_SPLIT_OPTIONS.GREEN,
        'Green route (long distance, smooth rise)',
        '',
        10,
        -35,
        0
      ),
      new StepOptionWithBoar(
        TRAIL_SPLIT_OPTIONS.BLUE,
        'Blue (medium distance, medium rise)',
        '',
        5,
        -30,
        15
      ),
      new StepOptionWithBoar(
        TRAIL_SPLIT_OPTIONS.RED,
        'Red (short distance, sharp rise)',
        '',
        -10,
        -25,
        30
      ),
    ]
  }

  handleInput(input: StepOptionWithBoar) {
    super.setNextStep(
      input.key === TRAIL_SPLIT_OPTIONS.GREEN
        ? diContainer.get('CheeseFactoryStep')
        : diContainer.get('CuckooStep')
    )

    return super.handleInput(input)
  }
}

export default TrailSplitStep