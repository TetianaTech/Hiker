import IBooleanGenerator from "../interfaces/IBooleanGenerator";

class BooleanGenerator implements IBooleanGenerator {
  probability: number

  setProbability(probability: number) {
    this.probability = probability / 100
    return this
  }

  generate() {
    return Math.random() < this.probability
  }
}

export default BooleanGenerator
