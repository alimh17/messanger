import { configureStore } from "@reduxjs/toolkit";
import { activeHomeAction } from "./action/sidebarAction";
import thunk from 'redux-thunk';
import { reducers } from "./reducer";

export const store = configureStore({ reducer: reducers, thunk: thunk });


store.dispatch(activeHomeAction());
