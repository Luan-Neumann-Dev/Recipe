import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from './recipeSlice'

const rootReducer = {
    recipes: recipesReducer
};

const store = configureStore({
    reducer: rootReducer,
})

export default store