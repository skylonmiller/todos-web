import { fork, all } from "redux-saga/effects";
import { watchApi, watchCron } from "@36node/redux";
import { watchXlsx } from "@36node/redux-xlsx";
import { makeSessionWatcher } from "@36node/redux-session";

import { auth } from "../actions/api";
import { domain } from "../constants";
import { LOGIN, REFRESH, LOGOUT } from "../actions/types";

const refresh = auth.makeRefresh(domain.session);
const watchSession = makeSessionWatcher({
  refresh,
  loginSuccessTypes: [LOGIN.SUCCESS, REFRESH.SUCCESS],
  logoutSuccessTypes: [LOGOUT.SUCCESS],
});

//root 这个 saga 的用途是, 合并 4 个监听功能 ?
export default function* root() {
  yield all([
    fork(watchApi),
    fork(watchCron),
    fork(watchXlsx),
    fork(watchSession),
  ]);
}
