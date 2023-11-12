import { ContainerBuilder, Reference } from "node-dependency-injection";
import Console from "../classes/Console";
import GameState from "../classes/GameState";
import Game from "../classes/Game";
import Steps from '../classes/steps'
import StepsWithBoar from '../classes/stepsWithBoar'
import BooleanGenerator from "../classes/BooleanGenerator";

class DIContainer {
  container: any

  constructor() {
    this.container = new ContainerBuilder
  }

  register() {
    this.container.register('Console', Console)
    this.container.register('GameState', GameState)
    this.container.register('BooleanGenerator', BooleanGenerator)

    for (const step in Steps) {
      this.container
        .register(step, Steps[step])
        .addArgument(new Reference("GameState"));
    }

    for (const step in StepsWithBoar) {
      this.container
        .register(step, StepsWithBoar[step])
        .addArgument(new Reference("GameState"))
        .addArgument(new Reference("BooleanGenerator"));
    }

    this.container
      .register('Game', Game)
      .addArgument(new Reference("Console"))
      .addArgument(new Reference("GameState"))
  }
}

export const DIContainerInstance = new DIContainer()
const diContainer = DIContainerInstance.container
export default diContainer