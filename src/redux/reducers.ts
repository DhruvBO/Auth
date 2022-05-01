import { combineReducers } from "redux";

import registrationFormSlice from "./slices/registrationForm/";

const rootReducer = combineReducers({ registrationFormSlice });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
