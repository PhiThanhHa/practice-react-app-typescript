import { all, fork } from "redux-saga/effects";
import { blackdomainActions } from "./blackdomains";
import { postAction } from "./post";

export function* AllSagaActions() {
  yield all([fork(blackdomainActions)]);
  yield all([fork(postAction)]);
}
