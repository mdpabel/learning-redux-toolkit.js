import store from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  unResolvedBugSelector,
} from "./store/entities/bug";
import { projectAdded } from "./store/entities/projects";
import { increment, decrement } from "./store/entities/counter";

store.dispatch(bugAdded({ description: "BUG1" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(projectAdded({ name: "Project-1" }));
store.dispatch(increment({ val: 1 }));
store.dispatch(decrement({ val: 1 }));

console.log(store.getState().entities);

const test = {
  entities: {
    bug: [],
  },
};

const x = unResolvedBugSelector(test);
console.log(x);
