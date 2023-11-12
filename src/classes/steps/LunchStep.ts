import StepOption from "../stepOptions/StepOption";
import Step from "../baseSteps/Step";
import diContainer from "../../services/DIContainer";
import IGameState from "../../interfaces/IGameState";
import { LUNCH_OPTIONS } from "../../constants/options";
import { STEPS } from "../../constants/steps";

class LunchStep extends Step {
  name: string
  question: string
  options: StepOption[]
  constructor(state: IGameState) {
    super(state)
    this.name = STEPS.LUNCH
    this.question = 'You\'ve gone quite a bit of the way and still haven\'t been eaten. Do you want to have a lunch now?'
    this.options = [
      new StepOption(
        LUNCH_OPTIONS.CONTINUE,
        'Continue the trip',
        'You continued on your way.',
        5,
        0
      ),
      new StepOption(
        LUNCH_OPTIONS.EAT,
        'Have a lunch!',
        'You\'ve had a good lunch! With full strength, you continued on your way.',
        20,
        -10
      ),
    ]
  }

  handleInput(input: StepOption) {
    super.setNextStep(
      diContainer
      .get('WeatherStep')
      .setNextStep(
        diContainer.get('TopMountainStep')
      )
    )
    return super.handleInput(input)
  }
}

export default LunchStep