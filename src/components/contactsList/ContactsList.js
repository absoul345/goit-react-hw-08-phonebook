import React, { useCallback } from 'react';
import Filter from './filter/Filter';
import ContactsItem from './contactsItem/ContactsItem';
import { phoneBookOperations } from '../../redux/phoneBook';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from '../../redux/phoneBook/contacts-selectors';

export default function ContactsList() {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilterContacts);

  const onDeleteContact = useCallback(
    id => {
      dispatch(phoneBookOperations.deleteContacts(id));
    },
    [dispatch],
  );

  return (
    <>
      <Filter />
      <ul>
        {contacts.map(contact => (
          <ContactsItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </>
  );
}
