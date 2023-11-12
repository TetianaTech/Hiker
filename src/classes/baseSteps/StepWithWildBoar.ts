import diContainer from "../../services/DIContainer";
import Step from "./Step";
import IGameState from "../../interfaces/IGameState";
import IStep from "../../interfaces/IStep";
import IStepOptionWithBoar from "../../interfaces/IStepWithBoar";
import IBooleanGenerator from "../../interfaces/IBooleanGenerator";

export class StepWithWildBoar extends Step {
  booleanGenerator: IBooleanGenerator
  constructor(state: IGameState, booleanGenerator: IBooleanGenerator) {
    super(state)
    this.booleanGenerator = booleanGenerator
  }

  handleInput(input: IStepOptionWithBoar) {
    super.handleInput(input)

    const boarProbability = input.boarProbability
    const shouldMeatBoar = this.booleanGenerator.setProbability(boarProbability).generate();

    return shouldMeatBoar
      ? diContainer.get('WildBoarStep').setNextStep(this.nextStep)
      : this.nextStep
  }
}