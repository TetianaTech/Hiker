import StepOption from "../stepOptions/StepOption";
import Step from "../baseSteps/Step";
import IGameState from "../../interfaces/IGameState";
import { KOLYBA_OPTIONS } from "../../constants/options";
import { STEPS } from "../../constants/steps";

class KolybaStep extends Step {
  name: string
  question: string
  options: StepOption[]
  constructor(state: IGameState) {
    super(state)
    this.name = STEPS.KOLYBA
    this.question = 'At the end of the trail, you see a Koliba. Would you like to come in for a meal?'
    this.options = [
      new StepOption(
        KOLYBA_OPTIONS.EAT,
        'Let\'s have a good meal!',
        'You ordered a lot of traditional Carpathian food and seems like enjoyed it immensely!',
        20,
        15
      ),
      new StepOption(
        KOLYBA_OPTIONS.BACK,
        'Return back home',
        'You decided to go straight home',
        0,
        0
      ),
    ]
  }

  handleInput(input: StepOption) {
    this.state.setAsComplete()
    return super.handleInput(input)
  }
}

export default KolybaStep