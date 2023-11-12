import IGameState from "../interfaces/IGameState";
import IStep from "../interfaces/IStep";
import IInput from "../interfaces/IInput";
import IConsole from "../interfaces/IConsole";
import diContainer from '../services/DIContainer'

class Game {
  state: IGameState
  console: IConsole
  currentStep: IStep
  constructor(readline: IConsole, gameState: IGameState) {
    this.state = gameState;
    this.console = readline
    this.currentStep = diContainer.get('FirstMoveStep');
  }

  start() {
    this.showQuestion()
  }

  async showQuestion() {
    const lastInputLinkMessage = this.state.inputs.at(-1)?.option.linkMessage
    const updatedQuestion = lastInputLinkMessage + ' ' + this.currentStep.question

    const input = await this.console.showQuestion(this.currentStep.name, updatedQuestion, this.currentStep.options)
    this.handleInput(input)
  }

  handleInput (input: IInput) {
    this.state.addInput(input)
    const stepResult = this.currentStep.handleInput(input.option);

    if (!stepResult) {
      const lastStepLink = this.state.inputs.at(-1).option.linkMessage
      this.console.showMessage(lastStepLink + ' ' + this.state.getState())
    } else {
      this.currentStep = stepResult as unknown as IStep
      this.showQuestion()
    }
  }
}

export default Game