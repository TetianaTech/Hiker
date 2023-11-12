import StepOption from "./StepOption";

export class StepOptionWithBoar extends StepOption {
  boarProbability: number;
  constructor(key: string, description: string, linkMessage: string, moodDelta: number, timeDelta: number, boarProbability: number) {
    super(key, description, linkMessage, moodDelta, timeDelta);
    this.boarProbability = boarProbability;
  }
}

export default StepOptionWithBoar;