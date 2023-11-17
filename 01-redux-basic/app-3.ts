import { Action, Reducer } from "./ngrx-fake/ngrx";
import { reducer } from "./contador/contador.reducer";
import { incrementationAction } from "./contador/contador.actions";

class Store<T> {
  constructor(private reducer: Reducer<T>, private state: T) {}

  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(reducer, 10);

store.dispatch(incrementationAction);
store.dispatch(incrementationAction);
console.log(store.getState());
