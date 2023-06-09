import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm';
import { contactList } from './ContactList/contactlist';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

const LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY))) ??
    [
      { id: 'id-1', name: 'Roise Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermoine Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-19' },
      { id: 'id-4', name: 'Ammie Copeland', number: '227-91-26' },
    ]
  
  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const id = nanoid();
    const contactList = [...contacts]
    if (contactList.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    }
    else {
      contactList.push({ name, id, number });
    }
    setContacts(contactList);
  };
  const deleteContacts = e => {
    setContacts(contacts.filter(contact => contact.id !== e));
  };

  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const getVisibleFilter = () => {
    const filterContactList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactList;
  };
  return (
    <div style=
      {{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '500px',
        marginTop: '50px',
        backgroundColor: '#b4d6f5',
        borderRadius: '8px',
        padding: '40px, 20px',
        outline: 'auto #291578',
        outlineOffset: '-10px',
      }}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2 className={css.contactList}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <contactList contacts={getVisibleFilter()}
        onDeleteContact={deleteContacts} />
    </div>
  )
};