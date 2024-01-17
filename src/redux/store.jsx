import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    recipients: recipientsSlice.reducer,
    users: usersSlice.reducer
  },
});

export default store;