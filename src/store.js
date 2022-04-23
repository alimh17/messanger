import { configureStore } from "@reduxjs/toolkit";
import { activeHomeAction } from "./action/sidebarAction";
import { reducers } from "./reducer";

export const store = configureStore({ reducer: reducers });

store.dispatch(activeHomeAction());
