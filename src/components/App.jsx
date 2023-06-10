import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '500px',
        marginTop: '50px',
        backgroundColor: '#b4d6f5',
        borderRadius: '8px',
        padding: '40px 20px',
        outline: 'auto #291578',
        outlineOffset: '-10px',
      }}
    >
      <h1 className={css.phohebookTitle}> Phonebook</h1>
      <ContactForm />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

