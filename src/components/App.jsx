import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{
      margin: '10px auto', padding: '15px', width: '400px', background: 'rgb(225, 252, 255)', border: '1px solid rgb(0, 0, 0)'
    }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {!isLoading && !error && <ContactList />}
    </div>
  );
};