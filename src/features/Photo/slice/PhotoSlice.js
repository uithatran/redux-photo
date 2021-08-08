import { Photos } from "../photos";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = Photos;

const randomId = () => {
  return Math.floor(Math.random() * 10000000) + 1;
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      action.payload.id = randomId();
      state.unshift(action.payload);
    },
    removePhoto: (state, action) => {
      return state.filter((photo) => photo.id !== (action.payload.id - 0));
    },
    updatePhoto: (state, action) => {
      const photoIndex = state.findIndex(
        (photo) => photo.id === action.payload.id
      );
      state[photoIndex] = action.payload;
    },
  },
});

const { reducer, actions } = photoSlice;

export const { addPhoto, removePhoto, updatePhoto } = actions;

export default reducer;
