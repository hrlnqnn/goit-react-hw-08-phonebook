import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div style={{
      margin: '10px auto', padding: '15px', width: '400px', background: 'rgb(225, 252, 255)', border: '1px solid rgb(0, 0, 0)'
    }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};