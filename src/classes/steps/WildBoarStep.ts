import StepOption from "../stepOptions/StepOption";
import Step from "../baseSteps/Step";
import IGameState from "../../interfaces/IGameState";
import { WILD_BOAR_OPTIONS } from "../../constants/options";
import { STEPS } from "../../constants/steps";

class WildBoarStep extends Step {
  name: string
  question: string
  options: StepOption[]
  constructor(state: IGameState) {
    super(state)
    this.name = STEPS.WILD_BOAR
    this.question = 'Following your chosen route, that runs through the forest, you come across a wild boar. Statistics show that wild boars have never attacked people on popular routes. What will you do next?'
    this.options = [
      new StepOption(
        WILD_BOAR_OPTIONS.BACK,
        'Return back home',
        '',
        -10,
        0),
      new StepOption(
        WILD_BOAR_OPTIONS.CONTINUE,
        'Continue trip',
        '',
        -10,
        0),
      new StepOption(
        WILD_BOAR_OPTIONS.TREE,
        'Climb a tree and wait',
        'Sitting in a tree you saw a wild boar go off into the thicket of the forest. You climbed down and continued your trip.',
        -10,
        -10),
    ]
  }

  handleInput(input: StepOption) {
    if (input.key === WILD_BOAR_OPTIONS.BACK) {
      super.setNextStep(null)
    }

    return super.handleInput(input)
  }
}

export default WildBoarStep