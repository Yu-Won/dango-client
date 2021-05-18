import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import user from './user';

const reducers = combineReducers({
  user,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // 'user' 등 넣으면됨(문자로) 6번째줄의 import한 이름을 넣으면됨.
};

const rootReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
