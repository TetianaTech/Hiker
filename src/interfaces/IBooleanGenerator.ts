interface IBooleanGenerator {
  probability: number
  setProbability: (probability: number) => IBooleanGenerator;
  generate: () => boolean;
}

export default IBooleanGenerator