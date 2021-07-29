import GameSavingLoader from './saving';
import GameSaving from './object';

export default function result() {
  return GameSavingLoader.load().then((saving) => new GameSaving(saving), (error) => error);
}
