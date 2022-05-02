import { createSlice } from "@reduxjs/toolkit";

type typeFormDataState = [
  {
    fName: string;
    lName: string;
    mName: string;
    email: string;
    address: string;
    pNo: number;
    age: number;
    gender: string;
    pwd: string;
    cpwd: string;
  }
];

const initialState: typeFormDataState = [
  {
    fName: "",
    lName: "",
    mName: "",
    email: "",
    address: "",
    pNo: 0,
    age: 0,
    gender: "",
    pwd: "",
    cpwd: "",
  },
];

const registrationFormSlice = createSlice({
  name: "registrationForm",
  initialState,
  reducers: {
    registrationData: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { registrationData } = registrationFormSlice.actions;

export default registrationFormSlice.reducer;
