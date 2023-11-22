
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {},
};

const infoSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        addInfo: (state, action) => {
            state.formData = { ...state.formData, ...action.payload };
        },
    },
});

export const { addInfo, deleteInfo} = infoSlice.actions;
export default infoSlice.reducer;
