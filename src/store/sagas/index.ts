import { all, fork } from "redux-saga/effects";
import { blackdomainActions } from "./blackdomains";

export function* AllSagaActions() {
  yield all([fork(blackdomainActions)]);
}
