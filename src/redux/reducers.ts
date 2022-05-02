import { combineReducers } from "redux";

import registrationFormSlice from "./slices/RegistrationForm/";
import userSlice from "./slices/User";

const rootReducer = combineReducers({ registrationFormSlice, userSlice });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
