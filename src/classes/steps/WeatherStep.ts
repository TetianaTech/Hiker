import StepOption from "../stepOptions/StepOption";
import Step from "../baseSteps/Step";
import IGameState from "../../interfaces/IGameState";
import { FIRST_MOVE_OPTIONS, WEATHER_OPTIONS } from "../../constants/options";
import { STEPS } from "../../constants/steps";

class WeatherStep extends Step {
  name: string
  question: string
  options: StepOption[]
  constructor(state: IGameState) {
    super(state)

    const firstMoveStepIndex = this.state.inputIndexMap[STEPS.FIRST_MOVE]
    const haveCheckedGears = this.state.inputs[firstMoveStepIndex].option.key === FIRST_MOVE_OPTIONS.CHECK

    this.name = STEPS.WEATHER
    this.question = `But rain started! ${haveCheckedGears 
      ? 'But you checked you gears and took raincoat with you!' 
      : 'Unfortunately, you forgot raincoat in the car and haven\'t checked your gears before started the trip.'
    } Will you continue the trip?`

    this.options = [
      new StepOption(
        WEATHER_OPTIONS.BACK,
        'Return back home',
        '',
        0,
        0
      ),
      new StepOption(
        WEATHER_OPTIONS.CONTINUE,
        'Continue',
        haveCheckedGears
          ? 'With your raincoat on, you continued on your way.'
          : 'Even a forgotten raincoat didn\'t make you change your plans. You continued on your way.',
        haveCheckedGears ? 0: -15,
        0
      )
    ]
  }

  handleInput(input: StepOption) {
    if (input.key === WEATHER_OPTIONS.BACK) {
      super.setNextStep(null)
    }
    return super.handleInput(input)
  }
}

export default WeatherStep