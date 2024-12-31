// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage as the default storage
import todoReducer from './todosSlice';
import authReducer from './authSlice';

// Persist config for authSlice
const authPersistConfig = {
  key: 'auth',
  storage, // Default storage is localStorage
  whitelist: ['token'], // Persist only the token part
};

// Persist config for todosSlice (optional, you can also persist todos if needed)
const todoPersistConfig = {
  key: 'todos',
  storage,
  whitelist: ['todos'], // Persist only the todos
};

// Create persisted reducers
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedTodoReducer = persistReducer(todoPersistConfig, todoReducer);

// Configure store
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    todos: persistedTodoReducer,
  },
});

// Create a persistor for syncing with localStorage
export const persistor = persistStore(store);

export default store;
