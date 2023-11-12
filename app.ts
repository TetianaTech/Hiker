import diContainer, { DIContainerInstance } from "./src/services/DIContainer";

DIContainerInstance.register()
diContainer.get('Game').start()
