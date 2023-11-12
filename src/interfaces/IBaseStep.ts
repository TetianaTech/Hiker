import IGameState from "./IGameState";
import IStep from "./IStep";
import IStepOption from "./IStepOption";

interface IBaseStep {
  state: IGameState
  nextStep: IStep | null
  setNextStep: (nextStep: IStep | null) => IBaseStep
  handleInput: (input: IStepOption) => IStep | null
}

export default IBaseStep