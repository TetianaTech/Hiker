import StepOption from "../stepOptions/StepOption";
import Step from "../baseSteps/Step";
import IGameState from "../../interfaces/IGameState";
import diContainer from "../../services/DIContainer";
import { TOP_MOUNTAIN_OPTIONS } from "../../constants/options";
import { STEPS } from "../../constants/steps";

class TrailSplitStep extends Step {
  name: string
  question: string
  options: StepOption[]
  constructor(state: IGameState) {
    super(state)
    this.name = STEPS.TOP_MOUNTAIN
    this.question = 'And congrats! You have reached the summit of the mountain, you now have a few options:'
    this.options = [
      new StepOption(
        TOP_MOUNTAIN_OPTIONS.LOOK_AROUND,
        'Take some time to soak in the breathtaking panoramic view and take some pictures.',
        'After spending a good time on the mountain you began your descent.',
        20,
        -20
      ),

      new StepOption(
        TOP_MOUNTAIN_OPTIONS.GO_DOWN,
        'Quickly take a few photos and start descending the mountain',
        'After taking a couple of pictures on the mountain you began your descent.',
        5,
        -5
      ),
    ]
  }

  handleInput(input: StepOption) {
    super.setNextStep(diContainer.get('BackTrailSplitStep'))
    return super.handleInput(input)
  }
}

export default TrailSplitStep