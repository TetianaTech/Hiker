import inquirer from 'inquirer';
import IConsole from "../interfaces/IConsole";
import IStepOption from "../interfaces/IStepOption";
class Console implements IConsole {
  async showQuestion(name: string, question: string, options: IStepOption[]) {
    const answer = await inquirer
      .prompt([{
        type: "list",
        name: name,
        message: question,
        choices: options.map(option => option.description)
      }])

    return {
      name,
      option: options.find(option => option.description === answer[name])
    }
  }

  showMessage(message: string) {
    console.log(message)
  }
}

export default Console