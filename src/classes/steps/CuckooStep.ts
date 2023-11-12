import StepOption from "../stepOptions/StepOption";
import Step from "../baseSteps/Step";
import IGameState from "../../interfaces/IGameState";
import diContainer from "../../services/DIContainer";
import { CUCKOO_OPTIONS } from "../../constants/options";
import { STEPS } from "../../constants/steps";

class CuckooStep extends Step {
  name: string
  question: string
  options: StepOption[]
  constructor(state: IGameState) {
    super(state)
    this.name = STEPS.CUCKOO
    this.question = 'While strolling along the route, the soothing sound of a cuckoo bird\'s call fills the air. What will you do next?'
    this.options = [
      new StepOption(
        CUCKOO_OPTIONS.CONTINUE,
        'Continue on your chosen path.',
        '',
        5,
        0
      ),
      new StepOption(
        CUCKOO_OPTIONS.COUNT,
        'Take a moment to whimsically count how many years you think you\'ll live while savoring the tranquility of the moment.',
        'You counted 100 years! And you continued on your way.',
        10,
        -5
      ),
    ]
  }

  handleInput(input: StepOption) {
    super.setNextStep(diContainer.get('LunchStep'))
    return super.handleInput(input)
  }
}

export default CuckooStep