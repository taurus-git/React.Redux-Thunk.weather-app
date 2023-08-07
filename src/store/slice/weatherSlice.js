import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../thunks/fetchWeather";

const weatherSlice = createSlice( {
    name: 'weather',
    initialState: {
        data: null,
        isLoading: false,
        error: null,
    },
    extraReducers( builder ) {
        builder.addCase( fetchWeather.pending, ( state, action ) => {
            state.isLoading = true;
        } );
        builder.addCase( fetchWeather.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.data = action.payload;
        } );
        builder.addCase( fetchWeather.rejected, ( state, action ) => {
            state.isLoading = false;
            state.error = action.error;
        } );
    }
} );

export const weatherReducer = weatherSlice.reducer;
