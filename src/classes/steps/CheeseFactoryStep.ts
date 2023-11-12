import StepOption from "../stepOptions/StepOption";
import StepOptionWithBoar from "../stepOptions/StepOptionWithBoar";
import Step from "../baseSteps/Step";
import diContainer from "../../services/DIContainer";
import IGameState from "../../interfaces/IGameState";
import { CHEESE_FACTORY_OPTIONS } from "../../constants/options";
import { STEPS } from "../../constants/steps";

class CheeseFactoryStep extends Step {
  name: string
  question: string
  options: StepOption[]
  constructor(state: IGameState) {
    super(state)
    this.name = STEPS.CHEESE_FACTORY
    this.question = 'As you follow the green path through the expansive open fields, you come across a picturesque glade. In the distance, you spot a Cheese Factory. Your next options are:'
    this.options = [
      new StepOption(
        CHEESE_FACTORY_OPTIONS.CONTINUE,
        'Continue your journey along the green route.',
        '',
        10,
        0
      ),
      new StepOption(
        CHEESE_FACTORY_OPTIONS.TRY,
        'Take a detour and explore the Cheese Factory to try some Karpatian cheese.',
        'You\'ve had a good meal and a lot of fun! With a good mood you continued the trip.',
        20,
        -15
      ),
    ]
  }

  handleInput(input: StepOptionWithBoar) {
    super.setNextStep(
      input.key === CHEESE_FACTORY_OPTIONS.CONTINUE
        ? diContainer.get('LunchStep')
        : diContainer
          .get('WeatherStep')
          .setNextStep(
            diContainer.get('TopMountainStep')
          )
    )
    return super.handleInput(input)
  }
}

export default CheeseFactoryStep