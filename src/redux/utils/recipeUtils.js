import { createAsyncThunk } from '@reduxjs/toolkit'
import { APP_ID, APP_KEY } from '../../api/apiConstants'
import fetchData from '../../api/axios'
import { extractRecipeData } from '../../utils/helpers'

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async (queryText = "chicken") => {
    try {
        const { data } = await fetchData(
            `?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=${queryText}`
        )
        
        let recipesData = extractRecipeData(data)

        return recipesData

    } catch (error) {
        throw Error("Failed to fetch recipes.")
    }
})