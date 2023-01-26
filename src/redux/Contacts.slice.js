import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Jane Doe', number: '804(166)220-55-95' },
        { id: 'id-2', name: 'John Doe', number: '50(061)672-01-68' },
        { id: 'id-3', name: 'John Paul', number: '5(5102)750-81-58' },
        { id: 'id-4', name: 'Dennis Wilson', number: '13(8330)970-09-79' },
        { id: 'id-5', name: 'Rick Bell', number: '2(6388)541-45-72' },
        { id: 'id-6', name: 'John Gardner', number: '9(989)872-67-35' },
        { id: 'id-7', name: 'Shane Gonzales', number: '25(019)004-42-80' },
        { id: 'id-8', name: 'Joseph Duncan', number: '0(06)853-72-53' },
    ],
    filter: '',
};

export const contactsSlice = createSlice({
    name: 'phonebook',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload
            );
        },
        setFilterValue: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addContact, removeContact, setFilterValue } =
    contactsSlice.actions;

const persistConfig = {
    key: 'contacts',
    storage,
};

export const persistedReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);

export const getFilter = state => state.phonebook.filter;