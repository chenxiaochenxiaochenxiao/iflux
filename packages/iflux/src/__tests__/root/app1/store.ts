import { createStore } from '../../../store';
import * as action from './action';

export default createStore({
  ns: 'app1',
  action,
  state: {
    text: 'hello app1'
  }
});

it('app1 store', () => {});
