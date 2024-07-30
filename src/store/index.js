import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };


// Previous Code (Before formatting)
/*

import { configureStore, createSlice, createAction } from '@reduxjs/toolkit'

export const reset = createAction("app/reset");

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        // 'song' + '/' + 'addSong' = 'song/addSong'
        // If an action is dispatched with the type 'song/addSong',
        // the addSong function will be called
        addSong(state, action) {
            // Here, State is not the big state object in the store
            // It is the piece of state managed by this reducer (songSlice.reducer)
            state.push(action.payload);
        },
        // 'song' + '/' + 'removeSong' = 'song/removeSong'
        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },
    extraReducers(builder) {
        builder.addCase(moviesSlice.actions.reset, (state, action) => {
            return [];
        })
    }
});

const moviesSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
        // 'movie' + '/' + 'addMovie' = 'movie/addMovie'
        // If an action is dispatched with the type 'movie/addMovie',
        // the addMovie function will be called
        addMovie(state, action) {
            // Here, State is not the big state object in the store
            // It is the piece of state managed by this reducer (movieSlice.reducer)
            state.push(action.payload);
        },
        // 'movie' + '/' + 'removeMovie' = 'movie/removeMovie'
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        // reset(state, action) {
        //     return [];
        // }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        })
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
});
/// The key for the state for the store is set based on the reducer name
/// The song state will have the key "songs" as it is written inside configureStore

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch({
    type: 'song/addSong',
    payload: "New Song!!!"
});
/// The type 'song/addSong' is special. 
/// The 'song' portion is coming from songsSlice: name: "song",
/// The 'addSong' portion is coming from songsSlice: addSong(state, action) {
/// If we make a typo in 'song/addSong', 
/// it will not serve its intended purpose

const finalState = store.getState();
console.log(finalState)

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;

*/