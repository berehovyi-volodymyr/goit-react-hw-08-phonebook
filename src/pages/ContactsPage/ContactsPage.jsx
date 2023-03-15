import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

const ContactsPage = () => {
  return (
    <>
      <ContactForm />
      <h2>Contact</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
