import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './phoneBook-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};

const addContacts = (name, number) => async dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

const deleteContacts = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    return await axios
      .delete(`/contacts/${id}`)
      .then(() => dispatch(deleteContactSuccess(id)));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContacts, deleteContacts, fetchContacts };
