import IInput from "./IInput";

interface IGameState {
  mood: number;
  timeUntilDark: number;
  isComplete: boolean;
  isDarkAsked: boolean
  inputs: IInput[];
  inputIndexMap: Record<string, number>
  addInput: (input: IInput) => void;
  updateMood: (moodDelta: number) => void;
  updateTimeUntilDark: (timeDelta: number) => void;
  setAsComplete: () => void;
  setAsDarkAsked: () => void;
  getState: () => string;
}

export default IGameState