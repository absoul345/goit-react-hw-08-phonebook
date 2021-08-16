import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionAddContacts from '../../components/section/SectionAddContacts';
import SectionList from '../../components/section/SectionList';
import AddContacts from '../../components/addContacts/AddContacts';
import ContactsList from '../../components/contactsList/ContactsList';
import { phoneBookOperations } from '../../redux/phoneBook';
import { getLoading, getError } from '../../redux/phoneBook/contacts-selectors';

export default function PhonebookPage() {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => {
    dispatch(phoneBookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <SectionAddContacts title="Phonebook">
        <AddContacts />
      </SectionAddContacts>
      <SectionList title="Contacts">
        <ContactsList />
        {error && <h1>Error</h1>}
        {isLoadingContacts && <h1>Loading...</h1>}
      </SectionList>
    </>
  );
}
