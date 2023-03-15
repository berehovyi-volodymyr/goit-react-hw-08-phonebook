import styles from './contactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  filteredContacts,
  isContactLoading,
} from '../../redux/contacts/contacts-selectots';
import {
  getContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operation';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(filteredContacts);
  const isLoading = useSelector(isContactLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {isLoading ? (
        <h2>...Loading</h2>
      ) : (
        items.map(({ id, name, number: phone }) => (
          <li key={id} className={styles.listItems}>
            <p className={styles.name}>{name}</p>
            <p className={styles.phone}>{phone}</p>
            <button
              className={styles.button}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};
export default ContactList;
