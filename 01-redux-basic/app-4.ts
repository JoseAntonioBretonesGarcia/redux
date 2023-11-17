import { Store } from "redux";
import { legacy_createStore as createStore } from "redux";
import { reducer } from "./contador/contador.reducer";
import { incrementationAction } from "./contador/contador.actions";

const store: Store = createStore(reducer);

store.subscribe(() => {
  console.log("Sub: ", store.getState());
});

store.dispatch(incrementationAction);
store.dispatch(incrementationAction);
store.dispatch(incrementationAction);
store.dispatch(incrementationAction);
