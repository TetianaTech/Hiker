import IStep from "../../interfaces/IStep";
import IStepOption from "../../interfaces/IStepOption";
import IGameState from "../../interfaces/IGameState";
import IBaseStep from "../../interfaces/IBaseStep";
import diContainer from "../../services/DIContainer";

class Step implements IBaseStep {
  state: IGameState
  nextStep: IStep | null
  constructor(state: IGameState) {
    this.state = state
  }

  setNextStep(nextStep: IStep | null) {
    this.nextStep = nextStep
    return this
  }

  handleInput(input: IStepOption) {
    this.state.updateTimeUntilDark(input.timeDelta)
    this.state.updateMood(input.moodDelta)

    if (!this.state.isComplete && !this.state.setAsDarkAsked && this.state.timeUntilDark < 40) {
      this.state.setAsDarkAsked()
      return diContainer.get('DarkStep').setNextStep(this.nextStep)
    }

    return this.nextStep
  }
}

export default Step