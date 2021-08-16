import React, { useCallback } from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../../redux/phoneBook/phoneBook-actions';
import { getFilter } from '../../../redux/phoneBook/contacts-selectors';

export default function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(getFilter);

  const onChangeFilter = useCallback(
    e => {
      dispatch(changeFilter(e.target.value));
    },
    [dispatch],
  );

  return (
    <>
      <label className={styles.filter}>
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          value={value}
          onChange={onChangeFilter}
        ></input>
      </label>
    </>
  );
}

Filter.prototype = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
