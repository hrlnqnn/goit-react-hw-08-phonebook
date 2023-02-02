
import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './Contacts.slice.js';


export const store = configureStore({
    reducer: {
        phonebook: phonebookReducer,
    },
});