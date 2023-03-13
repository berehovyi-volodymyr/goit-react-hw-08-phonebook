import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { useGetContactsQuery } from '../../redux/contacts/contacts-slice';

const ContactsPage = () => {
  const { data, isLoading } = useGetContactsQuery();
  return (
    <>
      <ContactForm />
      <h2>Contact</h2>
      {!isLoading && data.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <h2>No contacts in your phonebook</h2>
      )}
    </>
  );
};

export default ContactsPage;
