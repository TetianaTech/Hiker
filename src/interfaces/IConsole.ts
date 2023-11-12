import IStepOption from "./IStepOption";

interface IConsoleOutput {
  name: string;
  option: IStepOption
}
interface IConsole {
  showQuestion: (name: string, question: string, options: IStepOption[]) => Promise<IConsoleOutput>
  showMessage: (message: string) => void;
}

export default IConsole