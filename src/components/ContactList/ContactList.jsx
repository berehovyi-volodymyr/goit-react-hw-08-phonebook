import styles from './contactList.module.css';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contacts/contacts-slice';
import { getFilter } from '../../redux/filter/filter-selectors';

const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    if (!filter) {
      return data;
    }
    const normolizeFilter = filter.toLowerCase();

    return data.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normolizeFilter)
    );
  };
  const visibleContacts = filteredContacts();

  return (
    <ul className={styles.list}>
      {isLoading ? (
        <h2>...Loading</h2>
      ) : (
        visibleContacts.map(({ id, name, phone }) => (
          <li key={id} className={styles.listItems}>
            <p className={styles.name}>{name}</p>
            <p className={styles.phone}>{phone}</p>
            <button className={styles.button} onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};
export default ContactList;
