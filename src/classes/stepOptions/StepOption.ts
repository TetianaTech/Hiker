import IStepOption from "../../interfaces/IStepOption";

class StepOption implements IStepOption {
  key: string;
  description: string;
  linkMessage: string;
  moodDelta: number;
  timeDelta: number;
  constructor(key: string, description: string, linkMessage: string, moodDelta: number, timeDelta: number) {
    this.key = key
    this.description = description
    this.linkMessage = linkMessage
    this.moodDelta = moodDelta
    this.timeDelta = timeDelta
  }
}

export default StepOption