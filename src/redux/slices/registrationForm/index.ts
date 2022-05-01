import { createSlice } from "@reduxjs/toolkit";

interface typeFormDataState {
  fName: string;
  lName: string;
  mName: string;
  email: string;
  address: string;
  pNo: number;
  age: number;
  gender: string;
}

const initialState: typeFormDataState = {
  fName: "",
  lName: "",
  mName: "",
  email: "",
  address: "",
  pNo: 0,
  age: 18,
  gender: "",
};

const registrationFormSlice = createSlice({
  name: "registrationForm",
  initialState,
  reducers: {
    registrationData: (state, action) => {
      state = action.payload;
    },
  },
});

export const { registrationData } = registrationFormSlice.actions;

export default registrationFormSlice.reducer;
