import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './menu/menuSlice';
import dataReducer from './data/dataSlice';

// 각각의 reducer를 가져와 store에 저장한다.
export const store = configureStore({
    reducer: {
        menu: menuReducer,
        data: dataReducer
    }
})

// store의 각 payload의 type을 지정해주기 위해 getState를 통해 state 전부를 불러와
// 그것의 type을 ReturnType으로 지정
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;