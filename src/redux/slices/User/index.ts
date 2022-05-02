import { createSlice } from "@reduxjs/toolkit";
import { objectTraps } from "immer/dist/internal";

type typeUserDataState = {
  isLoggedIn: boolean;
  fName: string;
  lName: string;
  mName: string;
  email: string;
  address: string;
  pNo: string;
  age: string;
  gender: string;
};

const initialState: typeUserDataState = {
  isLoggedIn: false,
  fName: "",
  lName: "",
  mName: "",
  email: "",
  address: "",
  pNo: "",
  age: "",
  gender: "",
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    storeUserData: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { storeUserData } = userSlice.actions;

export default userSlice.reducer;
