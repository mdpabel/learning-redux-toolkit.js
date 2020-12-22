import store from "./store.js";
import { bugAdded, bugRemoved, bugResolved } from "./actions.js";

store.subscribe(() => {
  console.log("State changed", store.getState());
});

store.dispatch(bugAdded("BUG1"));

store.dispatch(bugResolved(1));

store.dispatch(bugRemoved());

console.log(store.getState());
