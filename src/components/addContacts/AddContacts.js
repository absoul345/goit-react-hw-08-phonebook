import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddContacts.module.css';
import { phoneBookOperations } from '../../redux/phoneBook';
import { getAllContacts } from '../../redux/phoneBook/contacts-selectors';

export default function AddContacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(getAllContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = useCallback(e => {
    setName(e.target.value);
  }, []);

  const handleNumberChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const sameContact = contacts.find(
        item =>
          item.name.toLowerCase() === name.toLowerCase() ||
          item.number === number,
      );

      if (sameContact) {
        return alert(
          `Name ${name} or number ${number} are already in contacts`,
        );
      }
      dispatch(phoneBookOperations.addContacts(name, number));
      reset();
    },
    [contacts, dispatch, name, number],
  );

  const reset = () => setName('') || setNumber('');

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor={uuidv4()}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            id={uuidv4()}
            value={name}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.label} htmlFor={uuidv4()}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            id={uuidv4()}
            value={number}
            onChange={handleNumberChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={styles.btn} type="submit">
          Add contacts
        </button>
      </form>
    </div>
  );
}
