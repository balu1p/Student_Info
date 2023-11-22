
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import infoSlice from './infoSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist'
const rootReducer = combineReducers({form: infoSlice});

const persistConfig = {
    key: "root",
    storage,
    version: 1
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

 const persistor = persistStore(store);
export { store, persistor };