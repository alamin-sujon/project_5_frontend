import { IUser } from "@/components/types";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
const initialState: { user: IUser | null } = {
  user: null,
};
const userReducre = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logOut } = userReducre.actions;
export const selectUser = (state: RootState) => state.auth.user;
export default userReducre.reducer;
